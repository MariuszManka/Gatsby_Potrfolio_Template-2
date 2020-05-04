import React from "react"

class ContextClass {
  constructor(props, parentContext) {
    this._parentContext = parentContext
  }

  onRenderProvider(props) {}
}

class ContextModulesClass extends ContextClass {
  constructor(props, parentContext) {
    super(props, parentContext)
    this._modules = []
    this._startProps = props
  }

  onRenderProvider(props) {
    for (let i in this._modules) {
      let module = this._modules[i]

      if (module.onRenderProvider) module.onRenderProvider(props)
    }
  }

  addModule(moduleName, createModule) {
    if (moduleName in this) return
    let module = createModule(this)
    this._modules.push(module)
    this[moduleName] = module

    if (module.onRenderProvider) module.onRenderProvider(this._startProps)
  }
}

class ModuleBaseClass {
  constructor(context) {
    this._context = context
  }

  onRenderProvider(props) {}

  refresh() {
    this._context.refresh()
  }
}

/**
 * Tworzenie odswieżalnego kontekstu dla komponentów
 * @returns {Object} Zwaraca {Provider, useContext, ModuleProvider, Module}
 */
function create() {
  const Context = React.createContext()

  /**
   * Komponent dostarczyciel kontekstu z możliwością odswieżania.
   * Odświerzanie jest możliwe przez wywołanie useContext().refresh()
   * Wszystkie poniższe dzieci mogą sięgnąć do danych stworzonych przez createData()
   * @param {Node} children Dzieci tego komponentu
   * @param {function} createData funkcja tworząca dana która bedzie widoczna dla dzieci.
   * 	Jeśli niezdefiniowany to przyjmuję się new ContextClass().
   * 	Parametry createData(props=other,parent=contekst poziom wyższy)
   * 	Obiekt stworzony przez createData() jeśli posiada funkcje onRenderProvider(props) to
   * 	ta funkcja jest wolana po każdym renderze Provider'a nie wynikajacym z wywołania funkcji refresh
   * @param {bool} fixedData Jeśli true to dana trzyma w contekscie będzie zawsze ta sama dopóki istnieje ten komponent
   * @param {} props pozostałe parametry które będą przekazywane do createData()
   * @returns {Node}
   */
  function Provider({ children, createData, fixedData, ...props }) {
    //Obiekt w nadrzędnym kontekście
    //===undefined jeśli brak
    const parent = React.useContext(Context)
    //Zmiana tego state'u rerendruje ten komponent
    const [state, setState] = React.useState(0)
    const data1 = React.useMemo(
      () => {
        if (!createData) return new ContextClass(props, parent)
        //Tworzenie danych przechowywanych w tym komponencie
        return createData(props, parent)
        // eslint-disable-next-line
      },
      fixedData ? [] : [createData]
    )
    let bNewRefresh = false
    const data2 = React.useMemo(() => {
      //Dodajemy funkcje refresh
      data1.refresh = () => setState(state + 1)
      //Jesli state===0 to pozwalamy na onRenderProvider
      //Bo to jest tuż po wywołaniu konstruktora i jest to pierwszy render
      if (state)
        // eslint-disable-next-line
        bNewRefresh = true
      return data1
      // eslint-disable-next-line
    }, [state, setState, data1])

    //Jeśli istnieje funkcja uruchamiamy onRenderProvider()
    //Żeby powiadomić o zmianie parametrów
    if (!bNewRefresh && data2.onRenderProvider) data2.onRenderProvider(props)

    return (
      <Context.Provider value={{ data: data2 }}>{children}</Context.Provider>
    )
  }

  /**
   * Sięganie do danych przechowywanych w kontekscie
   * @returns {Object} Zwraca obiekt trzymany w kontekscie
   */
  function useContext(moduleName) {
    const c = React.useContext(Context)

    if (!c) return undefined

    if (moduleName) return c.data[moduleName]
    return c.data
  }

  /**
   * Komponent dostarczyciel kontekstu z możliwością odswieżania z obsługą modułów.
   * @param {Node} children Dzieci w których jest dostępny kontekst
   * @returns {Node}
   */
  function ModuleProvider({ children, ...props }) {
    return (
      <Provider
        fixedData
        createData={(props, parentContext) => {
          return new ContextModulesClass(props, parentContext)
        }}
        {...props}
      >
        {children}
      </Provider>
    )
  }

  /**
   * Komponent umożliwiający dodawanie do obiektu przechowywanego w kontekscie
   * modułów które pozwalają rozszerzyć funkcjonalność obiektu przechowywanego.
   * Moduł dodaje do obiektu_przechowywanego[moduleName]=createModule(context,props)
   * @param {string} moduleName Nazwa modułu
   * @param {function} createModule Funkja tworząca moduł do obiektu przechowywanego
   * @param {Node} moduleComponent opcjonalny komponent modułu który bedzie renderowany w Module
   * @returns {Object} Zwaraca obiekt trzymany w kontekscie
   */
  function Module({ moduleName, createModule, moduleComponent, children }) {
    //obiekt przechowywany w kontekście
    const context = useContext()

    //Dodajemy moduł do kontekstu
    context.addModule(moduleName, createModule)

    //Renderujemy moduł komponentu
    if (moduleComponent) return moduleComponent({ children })

    return <React.Fragment>{children}</React.Fragment>
  }

  /**
	 * Umożliwia dostęp do danych trzymanych w kontekscie bez potrzeby budownia oddzielnego komponentu
	 * np:
	 * <context.Consumer>
			{
				c=>{
					return <div>consumer={c.wartość_z_danych}</div>
				}
			}
		</context.Consumer>
	 *
	 * @param {Node} {children}
	 * @returns {Node}
	 */
  function Consumer({ children }) {
    const context = useContext()

    if (!children) return null
    return children(context)
  }

  return {
    Provider,
    Consumer,
    useContext,
    ModuleProvider,
    Module,
  }
}

export default {
  create,
  ContextClass,
  ContextModulesClass,
  ModuleBaseClass,
}

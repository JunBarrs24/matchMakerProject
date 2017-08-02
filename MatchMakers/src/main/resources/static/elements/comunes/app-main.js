Polymer({
 
	is : 'app-main',

	properties : {

		pageSelected : String,

		_loading : Boolean,
		
		_querySearch: Object,

		_route : Object,

		_subRoute : Object,

		_pageData : {
			type : Object,
			observer : '_pageDataChanged'
		},

		_scrollPositionMap : {
			type : Object,
			value : function() {
				return {};
			}
		}
	},

	/**
	 * Preserves the document scroll position, so it can be restored when
	 * returning to a page.
	 */
	_pageDataChanged : function(pageData, oldPageData) {
		var map = this._scrollPositionMap;
		if (oldPageData != null && oldPageData.page != null) {
			map[oldPageData.page] = window.pageYOffset;
		}
		this._selectedPage = pageData.page;
		if (map[pageData.page] != null) {
			Polymer.AppLayout.scroll({
				top : map[pageData.page],
				behavior : 'silent'
			});
		} else if (this.isAttached) {
			Polymer.AppLayout.scroll({
				top : 0,
				behavior : 'silent'
			});
		}
		// Sending to the corresponding page
		this._goToPage(pageData.page);
	},

	/**
	 * Este evento se ejecuta cuando la página es recargada o va directo a una
	 * url hasheada revisa si hay un path, sino, usa el path por defecto y luego
	 * te redirige a esa página.
	 */
	attached : function() {
		this.async(function() {
			if (!this._route.path) {
				this.set('_route.path', '/' + this.pageSelected);
			} else {
				// Si llega aquí, el path es algo similar a este: /xxxxx/yyyy
				// yyyy puede ser opcional, así que debemos de manejar el path
				// para mandar a donde queremos, y ajustar el valor al query param
				
				// Obteniendo los diferentes valores del path
				const seccionesPath = this._route.path.split('/');
				// verificando (solo por si acaso) que el primer parametro es 0
				const pagina =
					seccionesPath[0] == '' ? seccionesPath[1] : seccionesPath[0];
			    // si hay queryParam, entonces se asigna para mantener el valor
			    if (seccionesPath.length == 3) {
			    	this._querySearch = seccionesPath[2];
			    }
			    //Asignando el valor de la página a ir, para redireccionar correctamente
				this.pageSelected = pagina;
			}
			this._goToPage(this.pageSelected);
		});
	},

	/**
	 * Método que te redirige a la página que quieres ver, recibe una cadena y
	 * te manda a esa, es importante notar que el iron-pages tiene le id "page"
	 * NO CAMBIES ESO AL MENOS QUE CAMBIES EL ID TAMBIEN
	 * 
	 * @param {string}
	 *            page la página a donde quieres que redirija, debe de ser igual
	 *            a algún "name" que hay listado en iron-pages, sino, te va a
	 *            redireccionar a la página con el error 404.
	 */
	_goToPage : function(page) {
		var pages = document.getElementById('pages');
		pages.select(page);
	},

	/**
	 * Método que procesa el resultado de la llamada al "getCurrentUser" url.
	 * 
	 * @param {Object}
	 *            el data object que regresa la función AJAX
	 */
	handleCurrentUserResponse : function(data) {
		this.user = data.detail.response;
	},

	/**
	 * Método que procesa el resultado de la llamada al "getMenuOptions" url.
	 * 
	 * @param {Object}
	 *            el data object que regresa la función AJAX
	 */
	handleMenuResponse : function(data) {
		this.menuOptions = data.detail.response;
	},

	/**
	 * Método que se ejecuta cuando la página llega a "ready"
	 * 
	 */
	ready : function() {
		this.pageSelected = 'clientes';
		this.loading = true;
		var drawerLayout = document.getElementById('drawerLayout');
		var toggle = document.getElementById('toggle');
		toggle.addEventListener('click', function() {
			if (drawerLayout.forceNarrow || !drawerLayout.narrow) {
				drawerLayout.forceNarrow = !drawerLayout.forceNarrow;
			} else {
				drawerLayout.drawer.toggle();
			}
		});
	},
});
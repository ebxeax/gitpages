/** * fw_menu 24OCT2000 Version 4.0
    * John Ahlquist, October 2000
    * Copyright (c) 2000 Macromedia, Inc.
    *
    * based on menu.js
    * by gary smith, July 1997
    * Copyright (c) 1997-1999 Netscape Communications Corp.
    * Netscape grants you a royalty free license to use or modify this
    * software provided that this copyright notice appears on all copies.
    * This software is provided "AS IS," without a warranty of any kind. */

function Menu(label, mw, mh, fnt, fs, fclr, fhclr, bg, bgh) {
	 this.version = "990702 [Menu; menu.js]";
	 this.type = "Menu";
	 this.menuWidth = mw;
	 this.menuItemHeight = mh;
	 this.fontSize = fs||12;
	 this.fontWeight = "plain";
	 this.fontFamily = fnt||"arial,helvetica,verdana,sans-serif";
	 this.fontColor = fclr||"#000000";
	 this.fontColorHilite = fhclr||"#ffffff";
	 this.bgColor = "#555555";
	 this.menuBorder = 1;
	 this.menuItemBorder = 1;
	 this.menuItemBgColor = bg||"#cccccc";
	 this.menuLiteBgColor = "#ffffff";
	 this.menuBorderBgColor = "#777777";
	 this.menuHiliteBgColor = bgh||"#000084";
	 this.menuContainerBgColor = "#cccccc";
	 this.childMenuIcon = "arrows.gif";
	 this.items = new Array();
	 this.actions = new Array();
	 this.childMenus = new Array();

	 this.hideOnMouseOut = true;
	 this.addMenuItem = addMenuItem;
	 this.addMenuSeparator = addMenuSeparator;
	 this.writeMenus = writeMenus;
	 this.FW_showMenu = FW_showMenu;
	 this.onMenuItemOver = onMenuItemOver;
	 this.onMenuItemAction = onMenuItemAction;
	 this.hideMenu = hideMenu;
	 this.hideChildMenu = hideChildMenu;

	 if (!window.menus) window.menus = new Array();
	 this.label = label || "menuLabel" + window.menus.length;
	 window.menus[this.label] = this;
	 window.menus[window.menus.length] = this;
	 if (!window.activeMenus) window.activeMenus = new Array();
}

function addMenuItem(label, action) {
	 this.items[this.items.length] = label;
	 this.actions[this.actions.length] = action;
}

function addMenuSeparator() {
	 this.items[this.items.length] = "separator";
	 this.actions[this.actions.length] = "";
	 this.menuItemBorder = 0;
}

// For NS6. 
function FIND(item) {
	 if (document.all) return(document.all[item]);
	 if (document.getElementById) return(document.getElementById(item));
	 return(false);
}

function writeMenus(container) {
	 if (window.triedToWriteMenus) return;
	 if (!container && document.layers) {
	    window.delayWriteMenus = this.writeMenus;
	    var timer = setTimeout('delayWriteMenus()', 250);
	    container = new Layer(100);
	    clearTimeout(timer);
	} else if (document.all || document.hasChildNodes) {
		   document.writeln('<SPAN ID="menuContainer"></SPAN>');
		   container = FIND("menuContainer");
	          }

	window.fwHideMenuTimer = null;
	if (!container) return;	
	window.triedToWriteMenus = true; 
	container.isContainer = true;
	container.menus = new Array();
	for (var i=0; i<window.menus.length; i++) 
	    container.menus[i] = window.menus[i];
	window.menus.length = 0;
	var countMenus = 0;
	var countItems = 0;
	var top = 0;
	var content = '';
	var lrs = false;
	var theStat = "";
	var tsc = 0;
	if (document.layers) lrs = true;
	for (var i=0; i<container.menus.length; i++, countMenus++) {
	    var menu = container.menus[i];
	    if (menu.bgImageUp) {
		menu.menuBorder = 0;
		menu.menuItemBorder = 0;
	       }
	    if (lrs) {
		var menuLayer = new Layer(100, container);
		var lite = new Layer(100, menuLayer);
		lite.top = menu.menuBorder;
		lite.left = menu.menuBorder;
		var body = new Layer(100, lite);
		body.top = menu.menuBorder;
		body.left = menu.menuBorder;
		} 
	   else {
		 content += ''+'<DIV ID="menuLayer'+ countMenus +'" STYLE="position:absolute;z-index:1;left:10;top:'+ (i * 100) +';visibility:hidden;">\n'+


















		 if (document.all) 
		    itemProps += 'font-size:' + menu.fontSize + ';" onMouseOver="onMenuItemOver(null,this);" onClick="onMenuItemAction(null,this);';










































































































































































































































































































































































































































































































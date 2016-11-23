"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var x_base_1 = require('./x.base');
var xcarouselMetaData = (function () {
    function xcarouselMetaData() {
    }
    xcarouselMetaData.XTYPE = 'carousel';
    xcarouselMetaData.INPUTNAMES = [
        'activeItem',
        'alwaysOnTop',
        'autoDestroy',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'cardSwitchAnimation',
        'centered',
        'cls',
        'contentEl',
        'control',
        'controller',
        'data',
        'defaultListenerScope',
        'defaults',
        'defaultType',
        'direction',
        'disabled',
        'docked',
        'draggable',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
        'indicator',
        'itemId',
        'items',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'left',
        'listeners',
        'manageBorders',
        'margin',
        'masked',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'padding',
        'plugins',
        'publishes',
        'record',
        'reference',
        'referenceHolder',
        'relative',
        'renderTo',
        'right',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'twoWayBindable',
        'ui',
        'useBodyElement',
        'userCls',
        'viewModel',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'fittoparent',
        'config'
    ];
    xcarouselMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,carousel,oldActiveItem' },
        { name: 'add', parameters: 'carousel,item,index' },
        { name: 'added', parameters: 'carousel,container,index' },
        { name: 'beforehide', parameters: 'carousel' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'carousel' },
        { name: 'beforetofront', parameters: 'carousel' },
        { name: 'deactivate', parameters: 'oldActiveItem,carousel,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'carousel' },
        { name: 'floatingchange', parameters: 'carousel,positioned' },
        { name: 'fullscreen', parameters: 'carousel' },
        { name: 'hide', parameters: 'carousel' },
        { name: 'initialize', parameters: 'carousel' },
        { name: 'move', parameters: 'carousel,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'carousel,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'carousel,positioned' },
        { name: 'remove', parameters: 'carousel,item,index' },
        { name: 'removed', parameters: 'carousel,container,index' },
        { name: 'renderedchange', parameters: 'carousel,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'carousel' },
        { name: 'tofront', parameters: 'carousel' },
        { name: 'updatedata', parameters: 'carousel,newData' },
        { name: 'ready', parameters: '' }
    ];
    xcarouselMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'deactivate',
        'destroy',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'move',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'remove',
        'removed',
        'renderedchange',
        'resize',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xcarouselMetaData;
}());
var xcarousel = (function (_super) {
    __extends(xcarousel, _super);
    function xcarousel(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xcarouselMetaData);
    }
    xcarousel.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xcarousel.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xcarouselMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xcarousel.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xcarousel.prototype, "dynamicRef", void 0);
    xcarousel = __decorate([
        core_1.Component({
            selector: 'x-' + xcarouselMetaData.XTYPE,
            inputs: xcarouselMetaData.INPUTNAMES,
            outputs: xcarouselMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xcarousel; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xcarousel);
    return xcarousel;
}(x_base_1.xbase));
exports.xcarousel = xcarousel;

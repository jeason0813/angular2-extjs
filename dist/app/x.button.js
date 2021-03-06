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
var xbuttonMetaData = (function () {
    function xbuttonMetaData() {
    }
    xbuttonMetaData.XTYPE = 'button';
    xbuttonMetaData.INPUTNAMES = [
        'allowDepress',
        'alwaysOnTop',
        'autoEvent',
        'axisLock',
        'badgeCls',
        'badgeText',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'centered',
        'cls',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'disabled',
        'docked',
        'draggable',
        'enableToggle',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'handler',
        'hasBadgeCls',
        'hasLabelCls',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'icon',
        'iconAlign',
        'iconCls',
        'id',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'labelCls',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'padding',
        'plugins',
        'pressed',
        'pressedDelay',
        'pressingCls',
        'pressingCls',
        'publishes',
        'record',
        'reference',
        'relative',
        'renderTo',
        'right',
        'scope',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'text',
        'textAlign',
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
        'value',
        'viewModel',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xbuttonMetaData.OUTPUTS = [
        { name: 'added', parameters: 'button,container,index' },
        { name: 'beforehide', parameters: 'button' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'button' },
        { name: 'beforetofront', parameters: 'button' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'button' },
        { name: 'floatingchange', parameters: 'button,positioned' },
        { name: 'fullscreen', parameters: 'button' },
        { name: 'hide', parameters: 'button' },
        { name: 'initialize', parameters: 'button' },
        { name: 'moved', parameters: 'button,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'button,positioned' },
        { name: 'release', parameters: 'button,e' },
        { name: 'removed', parameters: 'button,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'button' },
        { name: 'tap', parameters: 'button,e' },
        { name: 'tofront', parameters: 'button' },
        { name: 'updatedata', parameters: 'button,newData' },
        { name: 'ready', parameters: '' }
    ];
    xbuttonMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'destroy',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'release',
        'removed',
        'resize',
        'show',
        'tap',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xbuttonMetaData;
}());
var xbutton = (function (_super) {
    __extends(xbutton, _super);
    function xbutton(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xbuttonMetaData);
    }
    xbutton.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xbutton.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xbuttonMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xbutton.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xbutton.prototype, "dynamicRef", void 0);
    xbutton = __decorate([
        core_1.Component({
            selector: 'x-' + xbuttonMetaData.XTYPE,
            inputs: xbuttonMetaData.INPUTNAMES,
            outputs: xbuttonMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xbutton; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xbutton);
    return xbutton;
}(x_base_1.xbase));
exports.xbutton = xbutton;

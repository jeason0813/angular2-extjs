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
var xmediaMetaData = (function () {
    function xmediaMetaData() {
    }
    xmediaMetaData.XTYPE = 'media';
    xmediaMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'autoPause',
        'autoResume',
        'axisLock',
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
        'enableControls',
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
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'left',
        'listeners',
        'loop',
        'margin',
        'maxHeight',
        'maxWidth',
        'media',
        'minHeight',
        'minWidth',
        'modal',
        'muted',
        'padding',
        'plugins',
        'preload',
        'publishes',
        'record',
        'reference',
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
        'url',
        'useBodyElement',
        'userCls',
        'viewModel',
        'volume',
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
    xmediaMetaData.OUTPUTS = [
        { name: 'added', parameters: 'media,container,index' },
        { name: 'beforehide', parameters: 'media' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'media' },
        { name: 'beforetofront', parameters: 'media' },
        { name: 'destroy', parameters: '' },
        { name: 'ended', parameters: 'media,time' },
        { name: 'erased', parameters: 'media' },
        { name: 'floatingchange', parameters: 'media,positioned' },
        { name: 'fullscreen', parameters: 'media' },
        { name: 'hide', parameters: 'media' },
        { name: 'initialize', parameters: 'media' },
        { name: 'moved', parameters: 'media,container,toIndex,fromIndex' },
        { name: 'mutedchange', parameters: 'media,muted' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'pause', parameters: 'media,time' },
        { name: 'play', parameters: 'media' },
        { name: 'positionedchange', parameters: 'media,positioned' },
        { name: 'removed', parameters: 'media,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'media' },
        { name: 'stop', parameters: 'media' },
        { name: 'timeupdate', parameters: 'media,time' },
        { name: 'tofront', parameters: 'media' },
        { name: 'updatedata', parameters: 'media,newData' },
        { name: 'volumechange', parameters: 'media,volume' },
        { name: 'ready', parameters: '' }
    ];
    xmediaMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'destroy',
        'ended',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'moved',
        'mutedchange',
        'orientationchange',
        'painted',
        'pause',
        'play',
        'positionedchange',
        'removed',
        'resize',
        'show',
        'stop',
        'timeupdate',
        'tofront',
        'updatedata',
        'volumechange',
        'ready'
    ];
    return xmediaMetaData;
}());
var xmedia = (function (_super) {
    __extends(xmedia, _super);
    function xmedia(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xmediaMetaData);
    }
    xmedia.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xmedia.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xmediaMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xmedia.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xmedia.prototype, "dynamicRef", void 0);
    xmedia = __decorate([
        core_1.Component({
            selector: 'x-' + xmediaMetaData.XTYPE,
            inputs: xmediaMetaData.INPUTNAMES,
            outputs: xmediaMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xmedia; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xmedia);
    return xmedia;
}(x_base_1.xbase));
exports.xmedia = xmedia;

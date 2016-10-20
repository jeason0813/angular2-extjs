import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.d3.hierarchy.TreeMap
class xd3_treemapMetaData {
	public static XTYPE: string = 'd3-treemap';
	public static INPUTNAMES: string[] = [
		'alwaysOnTop',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'busyLayoutText',
		'centered',
		'clipScene',
		'cls',
		'colorAxis',
		'componentCls',
		'contentEl',
		'controller',
		'data',
		'defaultListenerScope',
		'disabled',
		'docked',
		'draggable',
		'enterAnimation',
		'exitAnimation',
		'expandEventName',
		'flex',
		'floated',
		'fullscreen',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'hierarchyCls',
		'html',
		'id',
		'itemId',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'leafTile',
		'left',
		'listeners',
		'margin',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'nodeChildren',
		'nodeClass',
		'nodeKey',
		'nodeText',
		'nodeTransform',
		'nodeValue',
		'noSizeLayout',
		'padding',
		'parentTile',
		'plugins',
		'publishes',
		'record',
		'reference',
		'relative',
		'renderLinks',
		'renderTo',
		'right',
		'rootVisible',
		'scrollable',
		'selectEventName',
		'selection',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'size',
		'sorter',
		'sticky',
		'store',
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
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'d3-treemap,container,index'},
		{name:'beforehide',parameters:'d3-treemap'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'d3-treemap'},
		{name:'beforetofront',parameters:'d3-treemap'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'d3-treemap'},
		{name:'floatingchange',parameters:'d3-treemap,positioned'},
		{name:'fullscreen',parameters:'d3-treemap'},
		{name:'hide',parameters:'d3-treemap'},
		{name:'initialize',parameters:'d3-treemap'},
		{name:'moved',parameters:'d3-treemap,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'d3-treemap,positioned'},
		{name:'removed',parameters:'d3-treemap,container,index'},
		{name:'resize',parameters:'element'},
		{name:'sceneresize',parameters:'component,scene,size'},
		{name:'scenesetup',parameters:'component,scene'},
		{name:'show',parameters:'d3-treemap'},
		{name:'tofront',parameters:'d3-treemap'},
		{name:'updatedata',parameters:'d3-treemap,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
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
		'removed',
		'resize',
		'sceneresize',
		'scenesetup',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xd3_treemapMetaData.XTYPE,
	inputs: xd3_treemapMetaData.INPUTNAMES,
	outputs: xd3_treemapMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xd3_treemap)}],
	template: '<template #dynamic></template>'
})
export class xd3_treemap extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xd3_treemapMetaData);
	}
	@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xd3_treemapMetaData);}
}
import { ElementRef, ComponentFactoryResolver, ViewContainerRef, QueryList } from '@angular/core';
import { extbase } from './ext.base';
export declare class extd3_sunburst extends extbase {
    constructor(eRef: ElementRef, resolver: ComponentFactoryResolver, vcRef: ViewContainerRef);
    extbaseRef: QueryList<ViewContainerRef>;
    dynamicRef: ViewContainerRef;
    ngAfterContentInit(): void;
    ngOnInit(): void;
}
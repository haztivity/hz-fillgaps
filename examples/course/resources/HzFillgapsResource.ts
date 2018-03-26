/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {Resource,ResourceController,$,EventEmitterFactory,DataOptions} from "@haztivity/core";
import "jquery-ui-dist/jquery-ui.js";
import "jq-fillgaps";
@Resource(
    {
        name:"HzFillgaps",
        dependencies:[
            $,
            EventEmitterFactory,
            DataOptions
        ]
    }
)
export class HzFillgapsResource extends ResourceController {
    protected static readonly DEFAULTS = {
        
    };
    public static readonly NAMESPACE = "hzFillgaps";
    protected _DataOptions:DataOptions;
    protected _fillgapsInstance:any;
    protected _isOpen:boolean=false;
    protected _id;
    protected _namespace;

    /**
     * Recurso de tooltip para Haztivity.
     * @param _$
     * @param _EventEmitterFactory
     * @param _ScormService
     */
    constructor(_$: JQueryStatic, _EventEmitterFactory, _DataOptions) {
        super(_$, _EventEmitterFactory);
        this._DataOptions = _DataOptions;
    }

    init(options, config?) {
        this._config = config;
        this._id = new Date().getTime();
        this._namespace = HzFillgapsResource.NAMESPACE + this._id;
        this._options = options;
        this.refresh();
    }
    public refresh(){
        if(this._fillgapsInstance){
            this._fillgapsInstance.destroy();
        }
        let fillgapsOptions = this._DataOptions.getDataOptions(this._$element, "hz-fillgaps");
        this._options.fillgapsOptions = this._$.extend(true,{},HzFillgapsResource.DEFAULTS, fillgapsOptions);
        this._$element.fillgaps(this._options.fillgapsOptions);
        this._fillgapsInstance = this._$element.data("hzFillgaps");
        this._assignEvents();
    }

    public getInstance(): any {
        return this._fillgapsInstance;
    }
    public disable(){
        if(super.disable()){
            this._fillgapsInstance.disable();
        }
    }
    public enable(){
        if(super.enable()){
            this._fillgapsInstance.enable();
        }
    }

    protected _assignEvents(){
        this._$element.off("."+HzFillgapsResource.NAMESPACE)
            .one("fillgaps:completed."+HzFillgapsResource.NAMESPACE,this._onCompleted.bind(this))
            .on("click."+HzFillgapsResource.NAMESPACE+" hover."+HzFillgapsResource.NAMESPACE,">*",this._onInteraction.bind(this));
    }
    protected _onInteraction(e){
        if(this.isDisabled()){
            e.stopPropagation();
        }
    }
    protected _onCompleted (e){
        this._markAsCompleted();
    }
    public destroy(){
        if(this._fillgapsInstance) {

        }
        super.destroy();
    }
}
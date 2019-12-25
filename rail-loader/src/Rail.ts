
import { Asset, RailListener } from "./interfaces";
import { loadScript } from "./utils";

class Rail {
    private assets: {[key:string]: Asset} = {};
    private states: {[key: string]: string} = {};
    private listener: RailListener;
    private services: {[key: string]: any} = {};

    register(name: string, service: any) {
        if (this.services[name]) {
            console.warn(name + ' is already registered');
        } else {
            this.services[name] = service;
        }
    }    

    setListener(listener: RailListener): void {
        this.listener = listener;
    }

    getState(name: string): string {
        if(!this.states[name]){
            return "none";
        }
        return this.states[name];
    }

    setState(name:string, state: string) {
        if(this.states[name]) {
            this.states[name] = state;
        } else {
            console.warn(name +  ' is not exits')
        }
    }

    addAsset(asset: Asset): void {
        if (!this.assets[asset.key]) {
            this.assets[asset.key] = asset;
            this.states[asset.key] = 'register';
            if(asset.dependencies) {
                for (const a of asset.dependencies) {
                    this.addAsset(a);
                }
            }
        }        
    }

    getAsset(key: string): Asset {
        return this.assets[key];
    }

    checkState() {
        
    }

    load() {
        for (const key of Object.keys(this.assets)) {
            const asset = this.getAsset(key);
            loadScript(asset.url, () => {
                if(this.listener) {
                    this.listener.onAssetLoad(asset, this);
                }
            },() => {
                if(this.listener) {
                    this.listener.onAssetError(asset, this);
                }
            });
        }
    }
}

export default Rail;
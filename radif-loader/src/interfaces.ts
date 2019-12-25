import Rail from "./Rail";

export interface Asset {
    url: string;
    key: string;
    optional: boolean;
    dependencies: Asset[];
}

export interface RailListener {
    onAssetError: (asset: Asset, rail: Rail) => void;
    onAssetLoad: (asset: Asset, rail: Rail) => void;
}
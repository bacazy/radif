import { Container } from "inversify";
import { Asset } from "./interfaces";
declare class Rail {
    container: Container;
    assets: Map<string, Asset>;
}
export default Rail;

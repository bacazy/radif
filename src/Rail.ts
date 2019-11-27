
import { Container } from "inversify";
import { Asset } from "./interfaces";

class Rail {
    container: Container = new Container();
    assets = new Map<string, Asset>();

}

export default Rail;
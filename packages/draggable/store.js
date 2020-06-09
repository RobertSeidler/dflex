import Store from "@dflex/store/src";
import CoreInstance from "@dflex/core-instance/src";

class DraggableStoreImp extends Store {
  register(elmInstance) {
    super.register(elmInstance, CoreInstance);
  }
}

let store;

// eslint-disable-next-line func-names
export default (function () {
  if (!store) {
    store = new DraggableStoreImp();
  }

  return store;
})();

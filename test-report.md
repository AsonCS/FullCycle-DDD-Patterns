<style type="text/css">:root {
  --text-primary: #111;
  --text-secondary: #4f4f4f;
  --success: #006633;
  --success-bright: #80ffbf;
  --danger: #cc071e;
  --danger-bright: #fbdfe0;
  --warning: #995c00;
  --warning-bright: #ffeea8;
  --panel: #eee;
  --border: #949494;
  --disabled: #6b6b6b;
}

html,
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: var(--text-primary);
}
body {
  padding: 2rem 1rem;
}
.jesthtml-content {
  margin: 0 auto;
  max-width: 70rem;
}
header {
  display: flex;
  align-items: center;
}
#title {
  margin: 0;
  flex-grow: 1;
}
#logo {
  height: 4rem;
}
#timestamp {
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

#metadata-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}

.additional-information-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--text-secondary);
}

/** SUMMARY */
#summary {
  color: var(--text-primary);
  display: flex;
  font-family: monospace;
  font-size: 1rem;
}
#summary > div {
  margin-right: 0.5rem;
  background: var(--panel);
  padding: 1rem;
  min-width: 15rem;
}
#summary > div:last-child {
  margin-right: 0;
}
@media only screen and (max-width: 720px) {
  #summary {
    flex-direction: column;
  }
  #summary > div {
    margin-right: 0;
    margin-top: 1rem;
  }
  #summary > div:first-child {
    margin-top: 0;
  }
}

.summary-total {
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.summary-passed {
  color: var(--success);
  border-left: 0.4rem solid var(--success);
  padding-left: 0.5rem;
  margin-bottom: 0.15rem;
}
.summary-failed,
.summary-obsolete-snapshots {
  color: var(--danger);
  border-left: 0.4rem solid var(--danger);
  padding-left: 0.5rem;
  margin-bottom: 0.15rem;
}
.summary-pending {
  color: var(--warning);
  border-left: 0.4rem solid var(--warning);
  padding-left: 0.5rem;
  margin-bottom: 0.15rem;
}
.summary-empty {
  color: var(--disabled);
  border-left: 0.4rem solid var(--disabled);
  margin-bottom: 0.15rem;
}

.test-result {
  padding: 1rem;
  margin-bottom: 0.25rem;
}
.test-result:last-child {
  border: 0;
}
.test-result.passed {
  background-color: var(--success-bright);
  color: var(--success);
}
.test-result.failed {
  background-color: var(--danger-bright);
  color: var(--danger);
}
.test-result.pending {
  background-color: var(--warning-bright);
  color: var(--warning);
}

.test-info {
  display: flex;
  justify-content: space-between;
}
.test-suitename {
  width: 20%;
  text-align: left;
  font-weight: bold;
  word-break: break-word;
}
.test-title {
  width: 40%;
  text-align: left;
  font-style: italic;
}
.test-status {
  width: 20%;
  text-align: right;
}
.test-duration {
  width: 10%;
  text-align: right;
  font-size: 0.85rem;
}

.failureMessages {
  padding: 0 1rem;
  margin-top: 1rem;
  border-top: 1px dashed var(--danger);
}
.failureMessages.suiteFailure {
  border-top: none;
}
.failureMsg {
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}

.suite-container {
  margin-bottom: 1rem;
}
.suite-info {
  padding: 1rem;
  background-color: var(--panel);
  color: var(--text-secondary);
  border: 0.15rem solid;
  border-color: var(--panel);
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
}
.suite-info:hover {
  border-color: var(--border);
  cursor: pointer;
}
.suite-info .suite-path {
  word-break: break-all;
  flex-grow: 1;
  font-family: monospace;
  font-size: 1rem;
}
.suite-info .suite-time {
  margin-left: 1rem;
  padding: 0.2rem 0.3rem;
  font-size: 0.85rem;
}
.suite-info .suite-time.warn {
  background-color: var(--danger);
  color: #fff;
}
.suite-info:before {
  content: "\2303";
  display: inline-block;
  margin-right: 1rem;
  transform: rotate(180deg) translateY(0.15rem);
}
.suite-container[open] .suite-info:before {
  transform: rotate(0deg) translateY(0.15rem);
}

/* CONSOLE LOGS */
.suite-consolelog {
  margin-bottom: 0.25rem;
  padding: 1rem;
  background-color: var(--panel);
}
.suite-consolelog-header {
  font-weight: bold;
}
.suite-consolelog-item {
  padding: 0.5rem;
}
.suite-consolelog-item pre {
  margin: 0.5rem 0;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
.suite-consolelog-item-origin {
  color: var(--text-secondary);
  font-weight: bold;
}
.suite-consolelog-item-message {
  color: var(--text-primary);
  font-size: 1rem;
  padding: 0 0.5rem;
}

/* OBSOLETE SNAPSHOTS */
.suite-obsolete-snapshots {
  margin-bottom: 0.25rem;
  padding: 1rem;
  background-color: var(--danger-bright);
  color: var(--danger);
}
.suite-obsolete-snapshots-header {
  font-weight: bold;
}
.suite-obsolete-snapshots-item {
  padding: 0.5rem;
}
.suite-obsolete-snapshots-item pre {
  margin: 0.5rem 0;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
.suite-obsolete-snapshots-item-message {
  color: var(--text-primary);
  font-size: 1rem;
  padding: 0 0.5rem;
}
</style><main class="jesthtml-content"><header><h1 id="title">Test Report</h1></header><section id="metadata-container"><div id="timestamp">Started: 2025-05-13 18:02:51</div><div id="summary"><div id="suite-summary"><div class="summary-total">Suites (14)</div><div class="summary-passed ">14 passed</div><div class="summary-failed  summary-empty">0 failed</div><div class="summary-pending  summary-empty">0 pending</div></div><div id="test-summary"><div class="summary-total">Tests (45)</div><div class="summary-passed ">45 passed</div><div class="summary-failed  summary-empty">0 failed</div><div class="summary-pending  summary-empty">0 pending</div></div></div></section><details id="suite-1" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/infrastructure/order/repository/sequilize/order.repository.spec.ts</div><div class="suite-time">0.738s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Order repository test</div><div class="test-title">should create a new order</div><div class="test-status">passed</div><div class="test-duration">0.208s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Order repository test</div><div class="test-title">should update a order</div><div class="test-status">passed</div><div class="test-duration">0.033s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Order repository test</div><div class="test-title">should find an order</div><div class="test-status">passed</div><div class="test-duration">0.019s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Order repository test</div><div class="test-title">should find all orders</div><div class="test-status">passed</div><div class="test-duration">0.024s</div></div></div></div></details><details id="suite-2" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/infrastructure/customer/repository/sequelize/customer.repository.spec.ts</div><div class="suite-time">0.243s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer repository test</div><div class="test-title">should create a customer</div><div class="test-status">passed</div><div class="test-duration">0.071s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer repository test</div><div class="test-title">should update a customer</div><div class="test-status">passed</div><div class="test-duration">0.007s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer repository test</div><div class="test-title">should find a customer</div><div class="test-status">passed</div><div class="test-duration">0.007s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer repository test</div><div class="test-title">should throw an error when customer is not found</div><div class="test-status">passed</div><div class="test-duration">0.005s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer repository test</div><div class="test-title">should find all customers</div><div class="test-status">passed</div><div class="test-duration">0.009s</div></div></div></div></details><details id="suite-3" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/infrastructure/product/repository/sequelize/product.repository.spec.ts</div><div class="suite-time">0.217s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product repository test</div><div class="test-title">should create a product</div><div class="test-status">passed</div><div class="test-duration">0.062s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product repository test</div><div class="test-title">should update a product</div><div class="test-status">passed</div><div class="test-duration">0.006s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product repository test</div><div class="test-title">should find a product</div><div class="test-status">passed</div><div class="test-duration">0.005s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product repository test</div><div class="test-title">should find all products</div><div class="test-status">passed</div><div class="test-duration">0.011s</div></div></div></div></details><details id="suite-4" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/domain/product/service/product.service.spec.ts</div><div class="suite-time">0.109s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product service unit tests</div><div class="test-title">should change the prices of all products</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div></div></details><details id="suite-5" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/domain/@shared/event/event-dispatcher.spec.ts</div><div class="suite-time">0.114s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Domain events tests</div><div class="test-title">should register an event handler</div><div class="test-status">passed</div><div class="test-duration">0.001s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Domain events tests</div><div class="test-title">should unregister an event handler</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Domain events tests</div><div class="test-title">should unregister all event handlers</div><div class="test-status">passed</div><div class="test-duration">0.001s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Domain events tests</div><div class="test-title">should notify all event handlers</div><div class="test-status">passed</div><div class="test-duration">0.008s</div></div></div></div></details><details id="suite-6" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/domain/checkout/service/order.service.spec.ts</div><div class="suite-time">0.108s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Order service unit tets</div><div class="test-title">should place an order</div><div class="test-status">passed</div><div class="test-duration">0.001s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Order service unit tets</div><div class="test-title">should get total of all orders</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div></div></details><details id="suite-7" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/domain/customer/event/customer-address-changed.event.spec.ts</div><div class="suite-time">0.116s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer Address Changed Event tests</div><div class="test-title">should notify all event handlers</div><div class="test-status">passed</div><div class="test-duration">0.002s</div></div></div></div></details><details id="suite-8" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/domain/customer/factory/customer.factory.spec.ts</div><div class="suite-time">0.113s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer factory unit test</div><div class="test-title">should create a customer</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer factory unit test</div><div class="test-title">should create a customer with an address</div><div class="test-status">passed</div><div class="test-duration">0.001s</div></div></div></div></details><details id="suite-9" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/domain/customer/entity/customer.spec.ts</div><div class="suite-time">0.111s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer unit tests</div><div class="test-title">should throw error when id is empty</div><div class="test-status">passed</div><div class="test-duration">0.003s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer unit tests</div><div class="test-title">should throw error when name is empty</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer unit tests</div><div class="test-title">should change name</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer unit tests</div><div class="test-title">should activate customer</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer unit tests</div><div class="test-title">should throw error when address is undefined when you activate a customer</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer unit tests</div><div class="test-title">should deactivate customer</div><div class="test-status">passed</div><div class="test-duration">0.001s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer unit tests</div><div class="test-title">should add reward points</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div></div></details><details id="suite-10" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/domain/checkout/factory/order.factory.spec.ts</div><div class="suite-time">0.112s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Order factory unit test</div><div class="test-title">should create an order</div><div class="test-status">passed</div><div class="test-duration">0.001s</div></div></div></div></details><details id="suite-11" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/domain/checkout/entity/order.spec.ts</div><div class="suite-time">0.13s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Order unit tests</div><div class="test-title">should throw error when id is empty</div><div class="test-status">passed</div><div class="test-duration">0.007s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Order unit tests</div><div class="test-title">should throw error when customerId is empty</div><div class="test-status">passed</div><div class="test-duration">0.001s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Order unit tests</div><div class="test-title">should throw error when items is empty</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Order unit tests</div><div class="test-title">should calculate total</div><div class="test-status">passed</div><div class="test-duration">0.001s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Order unit tests</div><div class="test-title">should throw error if the item qte is less or equal zero 0</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div></div></details><details id="suite-12" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/domain/product/factory/product.factory.spec.ts</div><div class="suite-time">0.143s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product factory unit test</div><div class="test-title">should create a proct type a</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product factory unit test</div><div class="test-title">should create a proct type b</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product factory unit test</div><div class="test-title">should throw an error when product type is not supported</div><div class="test-status">passed</div><div class="test-duration">0.003s</div></div></div></div></details><details id="suite-13" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/domain/customer/event/customer-created.event.spec.ts</div><div class="suite-time">0.173s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Customer Created Event tests</div><div class="test-title">should notify all event handlers</div><div class="test-status">passed</div><div class="test-duration">0.001s</div></div></div></div></details><details id="suite-14" class="suite-container" open=""><summary class="suite-info"><div class="suite-path">/home/acsgsa/dev/dev_full_cycle/ddd_modelagem_tatica_patterns/fc-ddd-patterns/src/domain/product/entity/product.spec.ts</div><div class="suite-time">0.125s</div></summary><div class="suite-tests"><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product unit tests</div><div class="test-title">should throw error when id is empty</div><div class="test-status">passed</div><div class="test-duration">0.006s</div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product unit tests</div><div class="test-title">should throw error when name is empty</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product unit tests</div><div class="test-title">should throw error when price is less than zero</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product unit tests</div><div class="test-title">should change name</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div><div class="test-result passed"><div class="test-info"><div class="test-suitename">Product unit tests</div><div class="test-title">should change price</div><div class="test-status">passed</div><div class="test-duration"> </div></div></div></div></details></main>
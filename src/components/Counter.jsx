import { observer } from 'mobx-react'
import { CounterStore } from '../stores/counterStore';

const counterStore = new CounterStore();

export const Counter = observer(() => {
  const increaseHandler = () => {
    counterStore.increase();
  }

  const decreaseHandler = () => {
    counterStore.decrease();
  }

  return (
    <section>
      <section>
        Counter value: {counterStore.count}
      </section>
      <section>
        <button title="+" onClick={increaseHandler}>+</button>
        <button title="-" onClick={decreaseHandler}>-</button>
      </section>
    </section>
  )
});


const SlotMachine = () => {
  // function randMax(max: number) {
  //   return Math.trunc(1e9 * Math.random()) % max;
  // }

  // var reel = {
  //   symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"],
  //   spin() {
  //     if (this.position == null) {
  //       this.position = randMax(this.symbols.length - 1);
  //     }
  //     this.position =
  //       (this.position + 100 + randMax(100)) % this.symbols.length;
  //   },
  //   display() {
  //     if (this.position == null) {
  //       this.position = randMax(this.symbols.length - 1);
  //     }
  //     return this.symbols[this.position];
  //   },
  // };

  // var slotMachine = {
  //   reels: [
  //     // this slot machine needs 3 separate reels
  //     // hint: Object.create(..)
  //   ],
  //   spin() {
  //     this.reels.forEach(function spinReel(reel) {
  //       reel.spin();
  //     });
  //   },
  //   display() {
  //     // TODO
  //   },
  // };

  // slotMachine.spin();
  // slotMachine.display();
  // // ☾ | ☀ | ★
  // // ☀ | ♠ | ☾
  // // ♠ | ♥ | ☀

  // slotMachine.spin();
  // slotMachine.display();
  // // ♦ | ♠ | ♣
  // // ♣ | ♥ | ☺
  // // ☺ | ♦ | ★

  // const runSlotMachine = () => {
  //   const symbols: string[] = ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"]
    
  //   const randomSymbol = () =>  Math.floor(Math.random() * symbols.length)
  //   console.log(`${symbols[randomSymbol()]} | ${symbols[randomSymbol()]} | ${symbols[randomSymbol()]}`)
  //   console.log(`${symbols[randomSymbol()]} | ${symbols[randomSymbol()]} | ${symbols[randomSymbol()]}`)
  //   console.log(`${symbols[randomSymbol()]} | ${symbols[randomSymbol()]} | ${symbols[randomSymbol()]}`)

  // }

  // console.log(runSlotMachine())

  return <div>SlotMachine</div>;
};

export default SlotMachine
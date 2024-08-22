<template>
    <div>
      <!-- Bag Page -->
      <div v-if="showBagPage" class="container bag-page">
        <div class="balance">
          <p>Coins: <!--img src="coin.jpg" alt="coin"--> {{ coins }} $</p>
        </div>
  
        <div class="item-list" v-for="item in items" :key="item.name">
          <div class="item">
            <div class="item-details">
              <p>{{ item.name }}</p>
            </div>
            <div class="item-actions">
              <button class="mix-btn" @click="mix(item)">Mix</button>
              <button class="sell-btn" @click="openSellPage(item)">Sell</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Sell Page -->
      <div v-if="showSellPage" class="container sell-page">
        <button class="exit-btn" @click="closeSellPage">
          X
        </button>
        <div class="circular-image">
          <img :src="currentItem.image" alt="Beluga">
        </div>
        <h3>Sell {{ currentItem.name }}</h3>
        <p>Price: {{ currentItem.price }} coins</p>
        <p>
          Quantity: <input type="number" v-model.number="quantity" :min="1" :max="10" style="width: 50px;">
        </p>
        <p>Total: {{ currentItem.price * quantity }} coins</p>
        <button class="confirm-btn" @click="confirmSale">Confirm</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showBagPage: true,
        showSellPage: false,
        coins: 0,
        items: [
          { name: "ShBeluga", price: 120, image: "beluga.png" },
          { name: "BigBeluga", price: 150, image: "beluga.png" },
          { name: "PacificBel", price: 100, image: "beluga.png" },
          { name: "QuickBB", price: 180, image: "beluga.png" },
        ],
        currentItem: {},
        quantity: 1,
      };
    },
    methods: {
      openSellPage(item) {
        this.currentItem = item;
        this.showBagPage = false;
        this.showSellPage = true;
      },
      closeSellPage() {
        this.showSellPage = false;
        this.showBagPage = true;
      },
      confirmSale() {
        alert(`Sold ${this.quantity} ${this.currentItem.name}(s) for ${this.currentItem.price * this.quantity} coins!`);
        this.closeSellPage();
      },
      mix(item) {
        const characters = ["char1", "char2", "char3", "char4"];
        if (characters.length === 4) {
          if (Math.random() < 0.5) {
            const newLevel = Math.floor(Math.random() * 10) + 1;
            alert(`Success! You leveled up to Level ${newLevel} ${item.name}!`);
          } else {
            alert("Failed! Three belugas run away!");
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: white;
    margin: 0;
    padding: 0;
  }
  .container {
    width: 100%;
    max-width: 320px;
    margin: 20px auto;
    padding: 10px;
    background-color: #1e1e1e;
    border-radius: 12px;
  }
  .balance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3f3f3f;
    padding: 15px;
    border-radius: 12px;
  }
  .balance img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .item-list {
    margin-top: 20px;
  }
  .item {
    display: flex;
    justify-content: space-between;
    background-color: #333;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
  }
  .item-details {
    flex: 1;
  }
  .item-actions {
    display: flex;
    gap: 10px;
  }
  .mix-btn,
  .sell-btn {
    padding: 5px 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  .mix-btn {
    background-color: #4caf50;
  }
  .sell-btn {
    background-color: #f44336;
  }
  .circular-image {
    width: 200px;
    height: 200px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .circular-image img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
  .sell-page {
    margin-top: 20px;
    padding: 20px;
    background-color: #333;
    border-radius: 12px;
    display: none;
    position: relative;
  }
  .exit-btn {
    background-color: transparent;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #d75858;
    transition: color 0.3s ease;
  }
  .exit-btn:hover {
    color: #ff0000;
  }
  .confirm-btn {
    background-color: #7c4dff;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
  }
  </style>  
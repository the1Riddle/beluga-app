<template>
  <div class="banana-game">
    <div class="header">
      <h2>BANANA</h2>
      <button class="harvest-btn" :disabled="remainingHarvest === 0" @click="harvest">
        Harvest
      </button>
    </div>
    <div class="status">
      <div class="peels-count">
        <span>Peels</span>
        <h3>{{ peelsCount }}</h3>
      </div>
      <div class="banana-counter">
        <div class="progress" :style="{ width: `${(bananaCount/360) * 100}%` }"></div>
        <div class="counter-image">
          <img
            src="@/assets/logo.svg"
            alt="Banana"
            @contextmenu.prevent="handleTouch"
            @touchstart="handleTouch"
          />
        </div>
        <p>{{ bananaCount }}/360</p>
      </div>
    </div>
    <div class="claim-section">
      <button :style="claim_button" :disabled="touchCount < 60 || remainingClaims <= 0" @click="claimBanana">
        Claim x1 Banana
      </button>
      <p v-if="nextClaimIn">{{ nextClaimIn }}</p>
    </div>
    <div class="leaderboard">
      <h3>Top Harvesters</h3>
      <ol>
        <li v-for="user in leaderboard" :key="user.id">{{ user.name }} - {{ user.harvests }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      peelsCount: 360,
      bananaCount: 0,
      remainingHarvest: 0,
      touchCount: 20,
      remainingClaims: 4,
      nextClaimIn: null,
      leaderboard: [
        { id: 1, name: "Alice", harvests: 10 },
        { id: 2, name: "Bob", harvests: 8 },
        { id: 3, name: "Charlie", harvests: 6 },
        { id: 4, name: "David", harvests: 4 },
        { id: 5, name: "Eve", harvests: 20 },
      ],
      timer: null,
    };
  },
  computed: {
    claim_button() {
      return {
        backgroundColor: this.touchCount >= 60 && this.remainingClaims > 0 ? "#af69ff" : "#ccc",
        color: "white",
        border: "none",
        padding: "10px",
        borderRadius: "20px",
        cursor: this.touchCount >= 60 && this.remainingClaims > 0 ? "pointer" : "not-allowed",
      };
    },
  },
  methods: {
    handleTouch(event) {
      event.preventDefault();
      if (this.touchCount < 60) {
        this.touchCount++;
      }
      if (this.touchCount === 60) {
        this.remainingClaims--;
      }
    },
    claimBanana() {
      if (this.touchCount >= 60 && this.remainingClaims > 0) {
        this.bananaCount++;
        this.peelsCount++;
        this.touchCount = 0;
        this.startClaimTimer();
      }
    },
    startClaimTimer() {
      this.nextClaimIn = "08:00:00";
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        const [hours, minutes, seconds] = this.nextClaimIn.split(":").map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
        this.nextClaimIn = new Date(totalSeconds * 1000).toISOString().substr(11, 8);
        if (totalSeconds <= 0) {
          clearInterval(this.timer);
          this.remainingClaims = 4;
          this.nextClaimIn = null;
        }
      }, 1000);
    },
    harvest() {
      if (this.bananaCount === 360) {
        this.remainingHarvest++;
        this.bananaCount = 0;
      }
    },
  },
};
</script>

<style scoped>
.banana-game {
  background-color: #ffe135;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  color: #767879;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.harvest-btn {
  background-color: #af69ff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20px;
}
.claim-btn {
  background-color: #af69ff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20px;
}
.status {
  margin-top: 20px;
}
.peels-count h3 {
  color: #af69ff;
}
.banana-counter {
  position: relative;
  margin-top: 20px;
}
.progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #af69ff;
}
img {
  width: 100px;
}
.counter-image :hover {
  cursor: pointer;
}
.claim-section {
  margin-top: 20px;
}
.leaderboard {
  margin-top: 20px;
}
</style>

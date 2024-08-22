<template>
  <div class="card">
        <div class="rounded-pill income-header">
            <p class="pill_content">INCOME:</p>
            <div class="coins">
                <span class="material-symbols-outlined">paid</span> <p class="pill_content">{{ peelsCount }}</p>
            </div>
        </div>

        <div class="circular-progress-container">
          <svg class="progress-circle" viewBox="0 0 36 36">
            <!-- Background Circle -->
            <path
              class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <!-- Progress Circle -->
            <path
              class="circle"
              :stroke-dasharray="`${(touchCount / 60) * 100}, 100`"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <!-- Image Container -->
            <foreignObject x="3.5" y="3.5" width="29" height="29">
              <div class="circular-image">
                <img src="../assets/logo.svg" alt="Whale Image"
                  @click.prevent="handleTouch"
                  @touchstart="handleTouch"
                />
              </div>
            </foreignObject>
          </svg>
        </div>

        <div class="timer-contents">
            <div class="rounded-end-circle">
                <div class="nav-buttons">
                    <button>
                        <span class="material-symbols-outlined">business_center</span>
                        <p>Bag</p>
                    </button>
                </div>
            </div>
            <div v-if="touchCount <= 59" class="timer">
                <ul class="nav nav-fill gap-2 p-1 small rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-gray); --bs-nav-pills-link-active-color: var(--bs-white); --bs-nav-pills-link-active-bg: var(--bs-blue); background: white;">
                    <li class="nav-item" role="presentation">
                    <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                      <strong>Tab to Claim</strong>
                    </button>
                    </li>
                </ul>
            </div>
            <div v-if="touchCount == 60 && this.remainingClaims > 0" class="claim-section">
                <button :style="claim_button" @click="claimBanana">
                    Claim x1 Coin
                </button>
            </div>

            <div v-if="nextClaimIn" class="timer">
                <p class="fw-bolder">Claim your Reward in:</p>
                <ul class="nav nav-fill gap-2 p-1 small rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-gray); --bs-nav-pills-link-active-color: var(--bs-white); --bs-nav-pills-link-active-bg: var(--bs-blue); background: white;">
                    <li class="nav-item" role="presentation">
                    <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                      <strong>{{ nextClaimIn }}</strong>
                    </button>
                    </li>
                </ul>
            </div>
            <div class="rounded-start-circle text-center">
                <div class="nav-buttons">
                    <button>
                        <span class="material-symbols-outlined">chat</span>
                        <p>Franz</p>
                    </button>
                </div>
            </div>
        </div>
        <div class="nav section nav-pills nav-fill gap-2 p-1 small rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-gray); --bs-nav-pills-link-active-color: var(--bs-white); --bs-nav-pills-link-active-bg: var(--bs-blue); background: white;">
                <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                    <span class="material-symbols-outlined">home</span>
                    <p>Home</p>
                </button>
                <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">
                    <span class="material-symbols-outlined">account_balance_wallet</span>
                    <p>Wallet</p>
                </button>
                <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">
                    <span class="material-symbols-outlined">rewarded_ads</span>
                    <p>Ranking</p>
                </button>
                <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">
                    <span class="material-symbols-outlined">account_circle</span>
                    <p>My</p>
                </button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      peelsCount: 360,
      bananaCount: 0,
      touchCount: 0,
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
        if (this.remainingClaims === 0) {
          this.startClaimTimer();
        }
      }
    },
    claimBanana() {
      if (this.touchCount >= 60 && this.remainingClaims > 0) {
        this.bananaCount++;
        this.peelsCount++;
        this.touchCount = 0;
        if (this.remainingClaims === 0) {
          this.startClaimTimer();
        }
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

<style></style>

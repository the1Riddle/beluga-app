<template>
    <div class="card">
        <div class="circular-image-normal">
            <img src="../assets/logo.svg" alt="Whale Image">
        </div>
        <div class="text-center">
            <p class="fw-bolder"><strong>User Name</strong></p>
        </div>
        <div class="section">
            <div>
                <label for="inputEmail4" class="form-label">Full Name</label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2">
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                      <span class="material-symbols-outlined">edit_square</span>
                  </button>
                </div>
            </div>
            <div>
                <label for="inputEmail4" class="form-label">Address</label>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2">
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                      <span class="material-symbols-outlined">edit_square</span>
                  </button>
                </div>
            </div>
        </div>
        <div class="nav section nav-pills nav-fill gap-2 p-1 small rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-gray); --bs-nav-pills-link-active-color: var(--bs-white); --bs-nav-pills-link-active-bg: var(--bs-blue); background: white;">
                <button class="nav-link rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">
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
                <button class="nav-link active rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                    <span class="material-symbols-outlined">account_circle</span>
                    <p>My</p>
                </button>
        </div>
    </div>
</template>

<style>

</style>
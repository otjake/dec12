const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/CaYpGsDozVSDGtpqUjPx48?mode=gi_t";

const { createApp, computed, onBeforeUnmount, ref } = Vue;

createApp({
  setup() {
    const asoOkeGirls = [
      {
        name: "oyin",
        displayName: "Oyin",
        description: "You bring calm, taste, and the kind of loyalty I can lean on without thinking twice."
      },
      {
        name: "damilola",
        displayName: "Damilola",
        description: "You are my dependable gist minister and solution finder, always ready to show up, organize, hype, and keep me smiling."
      },
      {
        name: "yoma",
        displayName: "Yoma",
        description: "The stylish steady hand with premium energy, warm confidence, and a way of making every room feel happier."
      },
      {
        name: "adeola",
        displayName: "Adeola",
        description: "The elegant one with a generous heart, proper composure, and the kind of friendship that makes big days feel lighter."
      },
      {
        name: "ayodamola",
        displayName: "Ayodamola",
        description: "You bring warmth, joy, and steady support, the kind of presence that makes this season feel even more special."
      },
      {
        name: "bukunmi",
        displayName: "Bukunmi",
        description: "You bring love, laughter, and beautiful energy, and I would be so happy to have you standing with me."
      }
    ];

    const noClicks = ref(0);
    const accepted = ref(false);
    const note = ref("");
    const isSmallScreen = ref(window.matchMedia("(max-width: 640px)").matches);
    const requestedName = new URLSearchParams(window.location.search).get("name")?.trim().toLowerCase() || "";

    const jabs = [
      "Clock it, babe. This No button is not part of the wedding mood board.",
      "Oshee, premium lady. The aso-oke is calling and you are doing missed call?",
      "Fine girl, this is giving unserious. Bring that baddie energy to the Yes button.",
      "No gree for this No button. It is trying to block your soft-life assignment.",
      "Sope purrr, the Yes button just entered its main-character era.",
      "Achalugo, don't stress me. Your seat in the aso-oke department is already reserved.",
      "This No is not very demure, not very mindful. Choose joy, abeg.",
      "Odogwu behavior is saying Yes and entering the group chat with confidence.",
      "You want to miss premium owanbe gist? My sister, let's be guided.",
      "The Yes button is now the main character. Respect the storyline."
    ];

    const yesScale = computed(() => {
      const levels = isSmallScreen.value ? [1, 1.06, 1.12, 1.18, 1.24] : [1, 1.12, 1.24, 1.38, 1.52];
      return levels[Math.min(noClicks.value, levels.length - 1)];
    });

    const yesLabel = computed(() => {
      if (accepted.value) return "Yes confirmed";
      if (noClicks.value >= 4) return "Yes, abeg";
      if (noClicks.value >= 2) return "Yes, I am your lady";
      return "Yes, I am in";
    });

    const selectedGirl = computed(() => {
      return asoOkeGirls.find((girl) => girl.name === requestedName) || null;
    });

    const inviteGreeting = computed(() => {
      return selectedGirl.value ? `${selectedGirl.value.displayName}, be My Aso-Oke Lady` : "Be My Aso-Oke Lady";
    });

    const personalDescription = computed(() => {
      return selectedGirl.value
        ? selectedGirl.value.description
        : "Every woman in this circle has her own place in my heart,stood strong for me and have multiple pages in this book called my life, Please come clock it with me and add another page";
    });

    function chooseNo() {
      noClicks.value += 1;
      note.value = jabs[(noClicks.value - 1) % jabs.length];
    }

    function chooseYes() {
      accepted.value = true;

      if (WHATSAPP_GROUP_LINK.trim()) {
        window.location.href = WHATSAPP_GROUP_LINK;
        return;
      }

      note.value = "Correct answer. The WhatsApp group link will be added here once it is ready.";
    }

    const handleResize = () => {
      isSmallScreen.value = window.matchMedia("(max-width: 640px)").matches;
    };

    window.addEventListener("resize", handleResize);
    onBeforeUnmount(() => window.removeEventListener("resize", handleResize));

    return {
      accepted,
      asoOkeGirls,
      chooseNo,
      chooseYes,
      inviteGreeting,
      noClicks,
      note,
      personalDescription,
      selectedGirl,
      yesLabel,
      yesScale
    };
  },
  template: `
    <main class="relative min-h-screen overflow-hidden bg-[#fff8ec] text-[#211714]">
      <div class="aso-textile absolute inset-y-0 left-0 hidden w-[38vw] min-w-[360px] opacity-95 lg:block"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_76%_12%,rgba(247,186,62,.28),transparent_26rem),radial-gradient(circle_at_24%_88%,rgba(13,111,104,.18),transparent_24rem)]"></div>

      <div class="relative grid min-h-screen lg:grid-cols-[minmax(300px,34vw)_minmax(0,1fr)]">
        <aside class="relative hidden items-end overflow-hidden lg:flex">
          <div class="absolute inset-0 aso-textile"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-[#210f14]/45 via-transparent to-transparent"></div>
          <div class="mat-accent absolute left-8 top-10 h-28 w-44 rotate-[-8deg] opacity-80"></div>
          <div class="bead-strand absolute right-8 top-16 h-24 w-24 opacity-80"></div>
          <div class="relative m-10 w-full rounded-lg border border-white/25 bg-white/12 p-6 text-white shadow-2xl backdrop-blur-md slide-up">
            <p class="text-xs font-extrabold uppercase tracking-[.18em] text-[#fff2be]">Dec 12 bridal circle</p>
            <p class="mt-4 max-w-sm font-display text-3xl leading-tight">Aso-oke, gele, beads, fan, and full owanbe confidence.</p>
          </div>
        </aside>

        <section class="relative flex min-h-screen items-center px-4 py-8 sm:px-8 lg:pl-20 lg:pr-10 xl:pl-24 xl:pr-14">
          <div class="tie-dye-mark absolute right-8 top-10 hidden h-36 w-36 opacity-45 lg:block"></div>
          <div class="clay-pot absolute bottom-12 right-[34rem] hidden opacity-60 xl:block"></div>
          <div class="adire-swatch absolute right-20 top-52 hidden h-24 w-36 rotate-6 opacity-70 xl:block"></div>
          <div class="raffia-fan absolute bottom-28 right-10 hidden opacity-55 xl:block"></div>
          <div class="bead-row absolute bottom-10 left-20 hidden opacity-70 lg:flex" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
          <div class="mx-auto grid w-full max-w-6xl min-w-0 gap-8 xl:grid-cols-[minmax(0,1fr)_330px] xl:items-center">
            <div class="min-w-0 slide-up">
              <div class="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d73545]/20 bg-white/70 px-4 py-2 text-xs font-extrabold uppercase text-[#8d1f36] shadow-sm">
                <span class="h-2 w-2 rounded-full bg-[#0d6f68]"></span>
                #D'sSylvar wedding request
              </div>

              <h1 class="hero-title max-w-2xl font-display text-[#24100f]">
                {{ inviteGreeting }}
              </h1>

              <p class="mt-5 max-w-2xl text-base leading-8 text-[#6d5750] sm:text-lg lg:mt-6">
                I am calling my best ladies to stand with me, slay respectfully,
                and join the planning group for fabric details, color codes, and all the
                wedding-day gist.
              </p>

              <section class="mt-6 max-w-2xl rounded-lg border border-[#d89b25]/25 bg-white/80 p-5 shadow-sm backdrop-blur slide-up" aria-label="Personal note">
                <div class="mb-4 flex items-center gap-2" aria-hidden="true">
                  <span class="h-3 w-3 rounded-full bg-[#8d1f36] shadow-[0_0_0_3px_rgba(255,241,190,.7)]"></span>
                  <span class="h-3 w-3 rounded-full bg-[#d89b25] shadow-[0_0_0_3px_rgba(255,241,190,.7)]"></span>
                  <span class="h-3 w-3 rounded-full bg-[#0d6f68] shadow-[0_0_0_3px_rgba(255,241,190,.7)]"></span>
                </div>
                <p class="text-xs font-extrabold uppercase tracking-[.14em] text-[#946411]">
                  {{ selectedGirl ? "Why you are special to me" : "My Aso-Oke girls" }}
                </p>
                <p class="mt-3 text-lg font-bold leading-8 text-[#24100f]">
                  {{ personalDescription }}
                </p>
              </section>

              <div class="mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
                <div class="rounded-lg border border-[#0d6f68]/15 bg-white/75 p-4 shadow-sm backdrop-blur">
                  <p class="text-xs font-bold uppercase text-[#0d6f68]">Look</p>
                  <p class="mt-2 font-semibold">Aso-oke ready</p>
                </div>
                <div class="rounded-lg border border-[#d73545]/15 bg-white/75 p-4 shadow-sm backdrop-blur">
                  <p class="text-xs font-bold uppercase text-[#8d1f36]">Energy</p>
                  <p class="mt-2 font-semibold">Beads and joy</p>
                </div>
                <div class="rounded-lg border border-[#d89b25]/20 bg-white/75 p-4 shadow-sm backdrop-blur">
                  <p class="text-xs font-bold uppercase text-[#946411]">Mission</p>
                  <p class="mt-2 font-semibold">Say yes fast</p>
                </div>
              </div>

              <div class="mt-8 flex min-h-[112px] flex-wrap items-center gap-4 sm:min-h-[124px]">
                <button
                  class="relative min-h-14 min-w-36 rounded-lg bg-[#0d6f68] px-6 py-4 text-base font-extrabold text-white shadow-[0_18px_42px_rgba(13,111,104,.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#09534f] focus:outline-none focus:ring-4 focus:ring-[#0d6f68]/20 sm:min-w-40 sm:px-8"
                  :class="{ 'pop-in': noClicks > 0 }"
                  :style="{ transform: 'scale(' + yesScale + ')', transformOrigin: 'left center' }"
                  type="button"
                  @click="chooseYes"
                >
                  <span v-if="noClicks > 1" class="pulse-ring absolute inset-0 rounded-lg border-2 border-[#0d6f68]"></span>
                  {{ yesLabel }}
                </button>

                <button
                  class="min-h-14 rounded-lg border border-[#d73545]/25 bg-white px-7 py-4 font-extrabold text-[#8d1f36] shadow-sm transition hover:-translate-y-1 hover:border-[#d73545]/45 disabled:cursor-not-allowed disabled:opacity-40"
                  :class="{ 'shake-small': noClicks > 0 && !accepted }"
                  :disabled="accepted"
                  type="button"
                  @click="chooseNo"
                >
                  {{ noClicks >= 3 ? "Still no?" : "No" }}
                </button>
              </div>

              <p class="mt-5 min-h-12 max-w-2xl text-lg font-extrabold leading-7 text-[#8d1f36]" role="status">
                {{ note }}
              </p>

            </div>

            <div class="relative mx-auto w-full max-w-[330px] pop-in max-xl:hidden">
              <div class="absolute -inset-4 rounded-full border border-[#d89b25]/30"></div>
              <div class="mat-accent absolute -bottom-8 -left-10 h-20 w-28 rotate-12 opacity-70"></div>
              <div class="coral-bracelet absolute -right-8 -top-8 h-24 w-24 opacity-85"></div>
              <div class="float-soft relative overflow-hidden rounded-lg border border-[#24100f]/10 bg-white shadow-2xl">
                <div class="aso-textile h-48"></div>
                <div class="p-6">
                  <div class="mb-5 flex items-center justify-between">
                    <div>
                      <p class="text-xs font-extrabold uppercase text-[#8d1f36]">Invitation card</p>
                      <p class="mt-1 font-display text-2xl">For my ladies</p>
                    </div>
                    <div class="sparkle grid h-12 w-12 place-items-center rounded-full bg-[#f7ba3e] text-xl shadow-lg">✦</div>
                  </div>

                  <div class="space-y-3 text-sm font-semibold text-[#6d5750]">
                    <div class="flex items-center justify-between border-b border-[#24100f]/10 pb-3">
                      <span>Fabric brief</span>
                      <span class="text-[#0d6f68]">Pending</span>
                    </div>
                    <div class="flex items-center justify-between border-b border-[#24100f]/10 pb-3">
                      <span>Group chat</span>
                      <span class="text-[#0d6f68]">After Yes</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span>Vibes</span>
                      <span class="text-[#0d6f68]">Compulsory</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  `
}).mount("#app");

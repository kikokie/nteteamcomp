
// =================================
// CHARACTER DATABASE
// =================================

const characters = [
    {
        id: "Zero",
        name: "Zero",
        group: ["Cosmos","Hybrid"],
        image: "images/characters/Zero.png"
    },
    {
        id: "Edgar",
        name: "Edgar",
        group: ["Cosmos","Utility"],
        image: "images/characters/Edgar.png"
    },
    {
        id: "Chiz",
        name: "Chiz",
        group: ["Cosmos","Dps"],
        image: "images/characters/Chiz.png"
    },
    {
        id: "Shinku",
        name: "Shinku",
        group: ["Cosmos","Dps"],
        image: "images/characters/Shinku.png"
    },
    {
        id: "Baicang",
        name: "Baicang",
        group: ["Incantation","Dps"],
        image: "images/characters/Baicang.png"
    },
    {
        id: "Lacrimosa",
        name: "Lacrimosa",
        group: ["Chaos","Dps"],
        image: "images/characters/Lacrimosa.png"
    },
 {
        id: "Adler",
        name: "Adler",
        group: ["Incantation","Utility"],
        image: "images/characters/Adler.png"
    },
 {
        id: "Hotori",
        name: "Hotori",
        group: ["Cosmos","Hybrid"],
        image: "images/characters/Hotori.png"
    },
{

        id: "Akane",
        name: "Akane",
        group: ["Lakshana","Dps"],
        image: "images/characters/Akane.png"
    },
{

        id: "Daffodill",
        name: "Daffodill",
        group: ["Chaos","Hybrid"],
        image: "images/characters/Daffodill.png"
    },
{

        id: "Exe",
        name: "Exe",
        group: ["Chaos","Dps"],
        image: "images/characters/Exe.png"
    },{

        id: "Elyms",
        name: "Elyms",
        group: ["Cosmos","Utility"],
        image: "images/characters/Elyms.png"
    },

{

        id: "Aurelia",
        name: "Aurelia",
        group: ["Psyche","Dps"],
        image: "images/characters/Aurelia.png"
    },

{
        id: "Blackbird",
        name: "Blackbird",
    group: ["Psyche","Hybrid"],
        image: "images/characters/Blackbird.png"
    },
{

        id: "Chaos",
        name: "Chaos",
        group: ["Lakshana","Dps"],
        image: "images/characters/Chaos.png"
    },
{

        id: "Fadia",
        name: "Fadia",
        group: ["Psyche","Utility"],
        image: "images/characters/Fadia.png"
    },
{

        id: "Haniel",
        name: "Haniel",
        group: ["Psyche","Utility"],
        image: "images/characters/Haniel.png"
    },
{

        id: "Hathor",
        name: "Hathor",
        group: ["Lakshana","Hybrid"],
        image: "images/characters/Hathor.png"
    },

{

        id: "Iroi",
        name: "Iroi",
        group: ["Anima","Utility"],
        image: "images/characters/Iroi.png"
    },
{

        id: "Jiyuan",
        name: "Jiyuan",
        group: ["Anima","Hybrid"],
        image: "images/characters/Jiyuan.png"
    },
{

        id: "Linko",
        name: "Linko",
        group: ["Anima","Hybrid"],
        image: "images/characters/Linko.png"
    },
{

        id: "Mint",
        name: "Mint",
        group: ["Anima","Dps"],
        image: "images/characters/Mint.png"
    },
{

        id: "Nanally",
        name: "Nanally",
        group: ["Anima","Dps"],
        image: "images/characters/Nanally.png"
    },
{

        id: "Sakiri",
        name: "Sakiri",
        group: ["Incantation","Utility"],
   
        image: "images/characters/Sakiri.png"
    },
{

        id: "Skia",
        name: "Skia",
        group: ["Lakshana","Hybrid"],
        image: "images/characters/Skia.png"
    },
{

        id: "Zankou",
        name: "Zankou",
        group: ["Incantation","Hybrid"],
        image: "images/characters/Zankou.png"
    }

];

const esperTypes = new Set([
    "Anima",
    "Chaos",
    "Cosmos",
    "Incantation",
    "Lakshana",
    "Psyche"
]);

function getEsperType(character) {
    const groups = Array.isArray(character.group)
        ? character.group
        : [character.group];

    return groups.find(group => esperTypes.has(group)) || null;
}


// =================================
// SYNERGY DATABASE
// =================================

/*
groups:
The group combination associated with this synergy.

characterId:
The character portrait to display.

description:
The explanation shown when the portrait is clicked.

A synergy appears as a preview whenever Slot 1's group
matches ANY group in its groups array.

The other groups do not need to be selected.

The examples below use your current placeholder groups.
Replace them with your real game data.
*/

const synergyData = [
    {
        characterId: "Nanally",
        synergyWith: ["Shinku"],
        description:
            "Replace this text with your explanation of why Baicang works well with this DPS."
    },
    {
        characterId: "Mint",
        synergyWith: ["Shinku"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
 {
        characterId: "Jiyuan",
        synergyWith: ["Shinku", "Nanally","Zankou"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Linko",
        synergyWith: ["Zankou", "Shinku", "Nanally", "Baicang"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Iroi",
        synergyWith: ["Shinku", "Chiz","Nanally","Zankou", "Baicang","Chaos","Akane","Mint"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Adler",
        synergyWith: ["Zankou", "Lacrimosa","Baicang"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Baicang",
        synergyWith: [""],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Zankou",
        synergyWith: ["Lacrimosa"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Sakiri",
        synergyWith: ["Zankou", "Lacrimosa", "Nanally","Mint","Exe"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Exe",
        synergyWith: [""],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Daffodill",
        synergyWith: ["Lacrimosa", "Zankou","Baicang","Exe"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Lacrimosa",
        synergyWith: ["Zankou", "Blackbird"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Chiz",
        synergyWith: [""],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Edgar",
        synergyWith: [""],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Elyms",
        synergyWith: ["Shinku", "Akane","Chaos","Nanally", "Chiz","Mint"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Hotori",
        synergyWith: ["Nanally", "Lacrimosa"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Shinku",
        synergyWith: [""],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Zero",
        synergyWith: [ "Shinku","Chaos","Nanally","Mint","Akane"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Chaos",
        synergyWith: [ ""],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Akane",
        synergyWith: [ "Shinku","Blackbird"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Hathor",
        synergyWith: [ "Shinku","Chaos","Akane","Blackbird"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Skia",
        synergyWith: [ "Shinku","Blackbird","Akane"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Aurelia",
        synergyWith: [ ""],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Fadia",
        synergyWith: [ "Lacrimosa","Blackbird","Exe"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Haniel",
        synergyWith: [ "Lacrimosa","Blackbird","Zankou","Chaos","Akane"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },
{
        characterId: "Blackbird",
        synergyWith: [ "Lacrimosa","Akane","Chaos","Exe"],
        description:
            "Replace this text with your explanation of why Adler works well with this DPS."
    },


    // Example of a real group combination:
    //
    // {
    //     characterId: "character-id",
    //     groups: ["Anima", "Cosmos"],
    //     description:
    //         "Explain why this character works well with an Anima DPS."
    // },
    //
    // Add more combinations as needed.
];


// =================================
// CHARACTER SELECTION ELEMENTS
// =================================

const slots = document.querySelectorAll(".slot");

const modal = document.getElementById("character-modal");
const closeButton = document.getElementById("close-modal");
const modalHint = document.getElementById("modal-hint");

const searchInput = document.getElementById("character-search");
const filterButtons = document.querySelectorAll(".filter-button");

const characterGrid = document.getElementById("character-grid");
const emptyMessage = document.getElementById("empty-message");


// =================================
// SYNERGY ELEMENTS
// =================================

const synergyEmpty = document.getElementById("synergy-empty");
const synergyCategories = [
    { name: "Dps", list: document.getElementById("synergy-list-dps"), empty: document.getElementById("synergy-empty-dps") },
    { name: "Hybrid", list: document.getElementById("synergy-list-hybrid"), empty: document.getElementById("synergy-empty-hybrid") },
    { name: "Utility", list: document.getElementById("synergy-list-utility"), empty: document.getElementById("synergy-empty-utility") }
];
const recommendationEmpty = document.getElementById("recommendation-empty");
const arcRecommendationImages = [
    "images/Arc/Blow up the Crowd.png",
    "images/Arc/Blushing Mirage.png",
    "images/Arc/Camellia Society.png",
    "images/Arc/Contemplative Cat.png",
    "images/Arc/Cosmos Daze, Wild Reverie.png",
    "images/Arc/Day Off.png",
    "images/Arc/Eternal Waltz.png",
    "images/Arc/Far Side of the Moon.png",
    "images/Arc/Fluff of Ferocity.png",
    "images/Arc/Fluff of Finesse.png",
    "images/Arc/Fluff of Fleetness.png",
    "images/Arc/Fluff of Fortitude.png",
    "images/Arc/Good Boy's Grand Adventure.png",
    "images/Arc/Mind Royale.png",
    "images/Arc/Oraora!.png",
    "images/Arc/Raging Flames.png",
    "images/Arc/Ravenous Blade.png",
    "images/Arc/Ready-Ready.png",
    "images/Arc/Roostfeather Special.png",
    "images/Arc/Shiny Days.png",
    "images/Arc/Song of the Whale.png",
    "images/Arc/Tears Beneath the Mask.png",
    "images/Arc/The Last Rose.png",
    "images/Arc/Voice of Voyager.png",
    "images/Arc/What's Desired.png",
    "images/Arc/Youthful Fantasy.png"
];
const consoleRecommendationImages = [
    "images/Console/Crimson Twin Butterfly.png",
    "images/Console/Devil's Blood Curse.png",
    "images/Console/Diabolos.png",
    "images/Console/Fireflies and the Forest.png",
    "images/Console/Kingdom's Guard.png",
    "images/Console/Lost Radiance.png",
    "images/Console/Quite Manor.png",
    "images/Console/Shadow Creed.png",
    "images/Console/Speedy Hedgehog.png",
    "images/Console/Street Boxer.png",
    "images/Console/Thea's Night Tavern.png",
    "images/Console/Tiny Big Adventure.png"
];
const recommendationImageSlots = {
    arc: [
        document.getElementById("signature-arc-image"),
        document.getElementById("f2p-arc-image"),
        document.getElementById("arc-more-info-image")
    ],
    console: [
        document.getElementById("console-best-image"),
        document.getElementById("console-cartridge-image"),
        document.getElementById("console-more-info-image")
    ]
};

const synergyModal = document.getElementById("synergy-modal");
const closeSynergyButton =
    document.getElementById("close-synergy-modal");
const percentageModal = document.getElementById("percentage-modal");
const closePercentageButton =
    document.getElementById("close-percentage-modal");
const percentageModalTitle =
    document.getElementById("percentage-modal-title");
const percentageComparisonList =
    document.getElementById("percentage-comparison-list");
const suggestionButton = document.getElementById("suggestion-button");
const suggestionModal = document.getElementById("suggestion-modal");
const closeSuggestionButton =
    document.getElementById("close-suggestion-modal");
const suggestionLineupsElement =
    document.getElementById("suggestion-lineups");
const suggestionEmpty = document.getElementById("suggestion-empty");

const percentageComparisons = {
    arc: [
        { label: "Sample Stat 1", value: 85 },
        { label: "Sample Stat 2", value: 72 },
        { label: "Sample Stat 3", value: 64 },
        { label: "Sample Stat 4", value: 48 }
    ],
    console: [
        { label: "Sample Stat 1", value: 92 },
        { label: "Sample Stat 2", value: 76 },
        { label: "Sample Stat 3", value: 58 },
        { label: "Sample Stat 4", value: 43 }
    ]
};

const synergyDetailName =
    document.getElementById("synergy-detail-name");

const synergyDetailGroup =
    document.getElementById("synergy-detail-group");

const synergyDetailArt =
    document.getElementById("synergy-detail-art");

const synergyDetailDescription =
    document.getElementById("synergy-detail-description");


// =================================
// STATE
// =================================

let activeSlotIndex = null;
let activeGroup = "All";
let lastFocusedElement = null;

const selectedCharacters = [null, null, null, null];


// =================================
// OPEN CHARACTER SELECTION POPUP
// =================================

function openModal(slotIndex) {
    activeSlotIndex = slotIndex;
    lastFocusedElement = document.activeElement;

    modalHint.textContent =
        `Choose a character for Slot ${slotIndex + 1}.`;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    searchInput.value = "";

    setActiveGroup("All");
    renderCharacters();
}


// =================================
// CLOSE CHARACTER SELECTION POPUP
// =================================

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

    activeSlotIndex = null;

    restorePageScroll();
    restoreFocus();
}


// =================================
// GROUP FILTERS
// =================================

function setActiveGroup(group) {
    activeGroup = group;

    filterButtons.forEach(button => {
        const isActive = button.dataset.group === group;

        button.classList.toggle("active", isActive);

        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );
    });
}


// =================================
// DISPLAY AVAILABLE CHARACTERS
// =================================

function renderCharacters() {
    const searchTerm =
        searchInput.value.trim().toLowerCase();

    // Hide characters already assigned to other slots.
    const usedCharacterIds = selectedCharacters
        .filter((character, index) =>
            character !== null && index !== activeSlotIndex
        )
        .map(character => character.id);

    const filteredCharacters = characters.filter(character => {
        const characterGroups = Array.isArray(character.group)
            ? character.group
            : [character.group];

        const matchesGroup =
            activeGroup === "All" ||
            characterGroups.includes(activeGroup);

        const matchesSearch =
            character.name.toLowerCase().includes(searchTerm);

        const isAvailable =
            !usedCharacterIds.includes(character.id);

        const isValidForSlot =
            activeSlotIndex !== 0 || characterGroups.includes("Dps");

        return matchesGroup && matchesSearch && isAvailable && isValidForSlot;
    });

    characterGrid.replaceChildren();
    emptyMessage.hidden = filteredCharacters.length > 0;

    filteredCharacters.forEach(character => {
        const card = document.createElement("button");

        card.type = "button";
        card.className = "character-card";

        card.setAttribute(
            "aria-label",
            `Choose ${character.name}`
        );

        if (character.image) {
            const image = document.createElement("img");

            image.src = character.image;
            image.alt = character.name;
            image.loading = "lazy";

            image.addEventListener("error", () => {
                const placeholder =
                    document.createElement("div");

                placeholder.className = "character-placeholder";
                placeholder.textContent = "✦";

                image.replaceWith(placeholder);
            }, { once: true });

            card.appendChild(image);
        } else {
            const placeholder =
                document.createElement("div");

            placeholder.className = "character-placeholder";
            placeholder.textContent = "✦";

            card.appendChild(placeholder);
        }

        const name = document.createElement("span");
        name.className = "character-card-name";
        name.textContent = character.name;

        const group = document.createElement("span");
        group.className = "character-card-group";
    group.textContent = Array.isArray(character.group)
    ? character.group.join(", ")
    : character.group;

        card.append(name, group);

        card.addEventListener("click", () => {
            chooseCharacter(character);
        });

        characterGrid.appendChild(card);
    });
}


// =================================
// SELECT CHARACTER
// =================================

function chooseCharacter(character) {
    if (activeSlotIndex === null) {
        return;
    }

    selectedCharacters[activeSlotIndex] = character;

    updateSlot(activeSlotIndex, character);

    if (activeSlotIndex === 0) {
        renderRecommendationImages();
    }

    closeModal();

    // Refresh previews when any slot changes.
    renderSynergies();
}


// =================================
// UPDATE SLOT DISPLAY
// =================================

function updateSlot(slotIndex, character) {
    const slot = slots[slotIndex];

    const art = slot.querySelector(".character-art");
    const name = slot.querySelector(".slot-name");
    const status = slot.querySelector(".slot-status");

    art.replaceChildren();
    art.classList.remove("placeholder");

    if (character.image) {
        const image = document.createElement("img");

        image.src = character.image;
        image.alt = character.name;

        image.addEventListener("error", () => {
            art.classList.add("placeholder");
            art.replaceChildren();

            const symbol = document.createElement("span");
            symbol.className = "plus";
            symbol.textContent = "✦";

            const fallback = document.createElement("span");
            fallback.textContent = character.name;

            art.append(symbol, fallback);
            appendEsperTypeLogo(art, character);
        }, { once: true });

        art.appendChild(image);
        appendEsperTypeLogo(art, character);
    } else {
        art.classList.add("placeholder");

        const symbol = document.createElement("span");
        symbol.className = "plus";
        symbol.textContent = "✦";

        const group = document.createElement("span");
group.textContent = Array.isArray(character.group)
    ? character.group.join(", ")
    : character.group;

        art.append(symbol, group);
        appendEsperTypeLogo(art, character);
    }

    name.textContent = character.name;
    status.textContent = "Selected";

    const clearButton = slot.querySelector(".slot-clear");
    if (clearButton) {
        clearButton.hidden = false;
    }

    slot.querySelector(".slot-select").setAttribute(
        "aria-label",
        `Change Slot ${slotIndex + 1}: ${character.name}`
    );
}

function appendEsperTypeLogo(art, character) {
    const esperType = getEsperType(character);

    if (!esperType) {
        return;
    }

    const logo = document.createElement("img");
    logo.className = "esper-type-logo";
    logo.src = `Images/Esper Type/${esperType}.png`;
    logo.alt = `${esperType} esper type`;
    logo.title = logo.alt;
    logo.addEventListener("error", () => logo.remove(), { once: true });

    art.appendChild(logo);
}

function clearCharacterSlot(slotIndex) {
    selectedCharacters[slotIndex] = null;

    const slot = slots[slotIndex];
    const art = slot.querySelector(".character-art");
    const name = slot.querySelector(".slot-name");
    const status = slot.querySelector(".slot-status");
    const clearButton = slot.querySelector(".slot-clear");

    art.replaceChildren();
    art.classList.add("placeholder");

    const symbol = document.createElement("span");
    symbol.className = "plus";
    symbol.textContent = "+";

    const label = document.createElement("span");
    label.textContent = "Choose character";
    art.append(symbol, label);

    name.textContent = "Select a character";
    status.textContent = "Empty";
    clearButton.hidden = true;

    slot.querySelector(".slot-select").setAttribute(
        "aria-label",
        `Choose a character for Slot ${slotIndex + 1}`
    );

    renderSynergies();
}


// =================================
// RENDER SYNERGY CHARACTER PREVIEWS
// =================================



function renderSynergies() {
    const mainCharacter = selectedCharacters[0];

    synergyCategories.forEach(category => {
        category.list.replaceChildren();
        category.empty.hidden = true;
    });

    if (!mainCharacter) {
        synergyEmpty.hidden = false;
        synergyEmpty.textContent = "Choose a Slot 1 character to see synergies.";
        return;
    }

    synergyEmpty.hidden = true;

    const matchingSynergies = synergyData.filter(entry =>
        entry.synergyWith.includes(mainCharacter.id) &&
        entry.characterId !== mainCharacter.id
    );

    const uniqueSynergies = [
        ...new Map(
            matchingSynergies.map(entry => [entry.characterId, entry])
        ).values()
    ];

    uniqueSynergies.forEach(entry => {
        const character = characters.find(
            char => char.id === entry.characterId
        );

        if (!character) return;

        const groups = Array.isArray(character.group)
            ? character.group
            : [character.group];

        synergyCategories.forEach(category => {
            if (!groups.includes(category.name)) return;

            const card = document.createElement("button");
            card.className = "synergy-card";
            card.type = "button";
            card.title = character.name;
            card.setAttribute("aria-label", `View ${character.name} synergy details`);

            const portrait = document.createElement("span");
            portrait.className = "synergy-portrait";

            if (character.image) {
                const image = document.createElement("img");
                image.src = character.image;
                image.alt = "";
                image.addEventListener("error", () => {
                    const placeholder = document.createElement("span");
                    placeholder.className = "character-placeholder";
                    placeholder.textContent = "✦";
                    image.replaceWith(placeholder);
                }, { once: true });
                portrait.appendChild(image);
            } else {
                const placeholder = document.createElement("span");
                placeholder.className = "character-placeholder";
                placeholder.textContent = "✦";
                portrait.appendChild(placeholder);
            }

            appendEsperTypeLogo(portrait, character);

            const name = document.createElement("span");
            name.className = "synergy-card-name";
            name.textContent = character.name;

            card.append(portrait, name);

            card.addEventListener("click", () => {
                openSynergyModal(character, entry, mainCharacter);
            });

            category.list.appendChild(card);
        });
    });

    synergyCategories.forEach(category => {
        category.empty.hidden = category.list.childElementCount > 0;
    });
}

function chooseRandomImages(images, count) {
    const shuffledImages = [...images];

    for (let index = shuffledImages.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledImages[index], shuffledImages[randomIndex]] =
            [shuffledImages[randomIndex], shuffledImages[index]];
    }

    return shuffledImages.slice(0, count);
}

function renderRecommendationImages() {
    const hasMainCharacter = selectedCharacters[0] !== null;
    recommendationEmpty.hidden = hasMainCharacter;

    const imageSlots = [
        ...recommendationImageSlots.arc,
        ...recommendationImageSlots.console
    ];

    if (!hasMainCharacter) {
        imageSlots.forEach(image => {
            image.removeAttribute("src");
            image.alt = "";
            image.hidden = true;
        });
        return;
    }

    const selectedImages = [
        ...chooseRandomImages(
            arcRecommendationImages,
            recommendationImageSlots.arc.length
        ),
        ...chooseRandomImages(
            consoleRecommendationImages,
            recommendationImageSlots.console.length
        )
    ];

    imageSlots.forEach((image, index) => {
        const imagePath = selectedImages[index];
        image.src = imagePath;
        image.alt = imagePath.split("/").pop().replace(/\.png$/i, "");
        image.hidden = false;
    });
}

// =================================
// OPEN SYNERGY DETAILS POPUP
// =================================

function openSynergyModal(character, synergyEntry, mainCharacter) {
    lastFocusedElement = document.activeElement;

    synergyDetailName.textContent = character.name;

const characterGroups = Array.isArray(character.group)
    ? character.group.join(", ")
    : character.group;

synergyDetailGroup.textContent =
    `${characterGroups} · Synergy with ${mainCharacter.name}`;

    synergyDetailDescription.textContent =
        synergyEntry.description ||
        "No synergy explanation has been added yet.";

    synergyDetailArt.replaceChildren();

    if (character.image) {
        const image = document.createElement("img");

        image.src = character.image;
        image.alt = character.name;

        image.addEventListener("error", () => {
            const placeholder =
                document.createElement("span");

            placeholder.className = "character-placeholder";
            placeholder.textContent = "✦";

            image.replaceWith(placeholder);
        }, { once: true });

        synergyDetailArt.appendChild(image);
    } else {
        const placeholder = document.createElement("span");

        placeholder.className = "character-placeholder";
        placeholder.textContent = "✦";

        synergyDetailArt.appendChild(placeholder);
    }

    appendEsperTypeLogo(synergyDetailArt, character);

    synergyModal.classList.add("open");
    synergyModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    closeSynergyButton.focus();
}


// =================================
// CLOSE SYNERGY DETAILS POPUP
// =================================

function closeSynergyModal() {
    synergyModal.classList.remove("open");
    synergyModal.setAttribute("aria-hidden", "true");

    restorePageScroll();
    restoreFocus();
}

function openPercentageModal(type) {
    const sectionName = type === "arc" ? "Arc" : "Console";
    const comparison = percentageComparisons[type];

    lastFocusedElement = document.activeElement;
    percentageModalTitle.textContent =
        `${sectionName} Percentage Comparison`;
    percentageComparisonList.replaceChildren();

    comparison.forEach(item => {
        const row = document.createElement("div");
        row.className = "percentage-comparison-item";

        const label = document.createElement("span");
        label.className = "percentage-comparison-label";
        label.textContent = item.label;

        const value = document.createElement("span");
        value.className = "percentage-comparison-value";
        value.textContent = `${item.value}%`;

        const track = document.createElement("div");
        track.className = "percentage-comparison-track";
        track.setAttribute("aria-hidden", "true");

        const fill = document.createElement("div");
        fill.className = "percentage-comparison-fill";
        fill.style.width = `${item.value}%`;

        track.appendChild(fill);
        row.append(label, value, track);
        percentageComparisonList.appendChild(row);
    });

    percentageModal.classList.add("open");
    percentageModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closePercentageButton.focus();
}

function closePercentageModal() {
    percentageModal.classList.remove("open");
    percentageModal.setAttribute("aria-hidden", "true");

    restorePageScroll();
    restoreFocus();
}

function renderSuggestionLineups() {
    suggestionLineupsElement.replaceChildren();

    const mainDps = selectedCharacters[0];

    if (!mainDps) {
        suggestionEmpty.textContent =
            "Select a DPS in Slot 1 to view team suggestions.";
        suggestionEmpty.hidden = false;
        return;
    }

    const compatibleCharacters = [
        ...new Set(
            synergyData
                .filter(entry =>
                    entry.synergyWith.includes(mainDps.id) &&
                    entry.characterId !== mainDps.id
                )
                .map(entry => entry.characterId)
        )
    ].map(characterId =>
        characters.find(character => character.id === characterId)
    ).filter(Boolean);

    if (compatibleCharacters.length === 0) {
        suggestionEmpty.textContent =
            `No team suggestions are available for ${mainDps.name} yet.`;
        suggestionEmpty.hidden = false;
        return;
    }

    suggestionEmpty.hidden = true;

    for (let index = 0; index < 3; index++) {
        const teamCharacters = [mainDps];

        for (let offset = 0; offset < 3; offset++) {
            const teammateIndex = index + offset;
            teamCharacters.push(
                compatibleCharacters[teammateIndex] || null
            );
        }

        const section = document.createElement("section");
        section.className = "suggestion-lineup";
        section.setAttribute("aria-labelledby", `suggestion-lineup-title-${index}`);

        const heading = document.createElement("h3");
        heading.id = `suggestion-lineup-title-${index}`;
        heading.textContent = `Suggestion ${index + 1}`;

        const characterRow = document.createElement("div");
        characterRow.className = "suggestion-lineup-characters";

        teamCharacters.forEach(character => {
            const card = document.createElement("div");
            card.className = character
                ? "suggestion-character"
                : "suggestion-character is-empty";

            if (character) {
                const image = document.createElement("img");
                image.src = character.image;
                image.alt = "";

                const name = document.createElement("span");
                name.textContent = character.name;

                card.append(image, name);
            } else {
                const emptySlot = document.createElement("span");
                emptySlot.className = "suggestion-character-empty-slot";
                emptySlot.textContent = "Empty";
                card.appendChild(emptySlot);
            }
            characterRow.appendChild(card);
        });

        section.append(heading, characterRow);
        suggestionLineupsElement.appendChild(section);
    }
}

function openSuggestionModal() {
    lastFocusedElement = document.activeElement;
    renderSuggestionLineups();
    suggestionModal.classList.add("open");
    suggestionModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeSuggestionButton.focus();
}

function closeSuggestionModal() {
    suggestionModal.classList.remove("open");
    suggestionModal.setAttribute("aria-hidden", "true");
    restorePageScroll();
    restoreFocus();
}


// =================================
// SHARED MODAL HELPERS
// =================================

function restorePageScroll() {
    const anotherModalIsOpen =
        modal.classList.contains("open") ||
        synergyModal.classList.contains("open") ||
        percentageModal.classList.contains("open") ||
        suggestionModal.classList.contains("open");

    if (!anotherModalIsOpen) {
        document.body.style.overflow = "";
    }
}

function restoreFocus() {
    if (
        lastFocusedElement &&
        document.contains(lastFocusedElement)
    ) {
        lastFocusedElement.focus();
    }
}


// =================================
// EVENT LISTENERS
// =================================

// Clicking a slot opens character selection.
slots.forEach(slot => {
    slot.querySelector(".slot-select").addEventListener("click", () => {
        const slotIndex = Number(slot.dataset.slot);
        openModal(slotIndex);
    });
});

document.querySelectorAll(".slot-clear").forEach(button => {
    button.addEventListener("click", event => {
        event.stopPropagation();
        const slotIndex = Number(button.closest(".slot").dataset.slot);
        clearCharacterSlot(slotIndex);
    });
});

document.querySelectorAll(".comparison-button").forEach(button => {
    button.addEventListener("click", () => {
        openPercentageModal(button.dataset.comparison);
    });
});

suggestionButton.addEventListener("click", openSuggestionModal);

// Group filters.
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        setActiveGroup(button.dataset.group);
        renderCharacters();
    });
});

// Search.
searchInput.addEventListener("input", renderCharacters);

// Close character selection.
closeButton.addEventListener("click", closeModal);

// Close character selection using its backdrop.
modal.addEventListener("click", event => {
    if (event.target.matches("[data-close-modal]")) {
        closeModal();
    }
});

// Close synergy details.
closeSynergyButton.addEventListener(
    "click",
    closeSynergyModal
);

// Close synergy details using its backdrop.
synergyModal.addEventListener("click", event => {
    if (event.target.matches("[data-close-synergy]")) {
        closeSynergyModal();
    }
});

closePercentageButton.addEventListener("click", closePercentageModal);

percentageModal.addEventListener("click", event => {
    if (event.target.matches("[data-close-percentage]")) {
        closePercentageModal();
    }
});

closeSuggestionButton.addEventListener("click", closeSuggestionModal);

suggestionModal.addEventListener("click", event => {
    if (event.target.matches("[data-close-suggestion]")) {
        closeSuggestionModal();
    }
});

// Escape closes the topmost open popup.
document.addEventListener("keydown", event => {
    if (event.key !== "Escape") {
        return;
    }

    if (suggestionModal.classList.contains("open")) {
        closeSuggestionModal();
    } else if (percentageModal.classList.contains("open")) {
        closePercentageModal();
    } else if (synergyModal.classList.contains("open")) {
        closeSynergyModal();
    } else if (modal.classList.contains("open")) {
        closeModal();
    }
});


// =================================
// INITIAL DISPLAY
// =================================

renderSynergies();

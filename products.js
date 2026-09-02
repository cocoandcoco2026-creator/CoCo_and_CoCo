const products = [
    {
        url: "https://cocoandcoco.base.shop/items/155857470",
        image: "images/product1.jpeg",
        alt: "Éclat d’Azur",
        title: "Éclat d’Azur",
        jpTitle: "エクラ・ダジュール",
        category: "Neon Blue Apatite",
        description: [
            "自由な発想、",
            "気持ちを爽やかに。"
        ],
        price: "¥4,800",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155858614",
        image: "images/product2.jpeg",
        alt: "Éclat des Astres",
        title: "Éclat des Astres",
        jpTitle: "エクラ・デ・アストル",
        category: "Lapis lazuli",
        description: [
            "本質を見つめ、",
            "視野を広げる。"
        ],
        price: "¥4,800",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155859061",
        image: "images/product3.jpeg",
        alt: "Éclat Sylvestre",
        title: "Éclat Sylvestre",
        jpTitle: "エクラ・シルヴェストル",
        category: "Moss green kyanite",
        description: [
            "知的で洗練、",
            "派手すぎない存在感。"
        ],
        price: "¥3,600",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155859461",
        image: "images/product4.jpeg",
        alt: "Perle Unique",
        title: "Perle Unique",
        jpTitle: "ペルル・ユニーク",
        category: "Baroque pearl",
        description: [
            "上品さと華やかさ、",
            "さりげない個性。"
        ],
        price: "¥4,200",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155859674",
        image: "images/product5.jpeg",
        alt: "Lumière Dorée",
        title: "Lumière Dorée",
        jpTitle: "リュミエール・ドレ",
        category: "Lemon Quartz",
        description: [
            "洗練された華やかさ、",
            "上品で軽やか。"
        ],
        price: "¥4,200",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155860990",
        image: "images/product6.jpeg",
        alt: "Éclat d’Amour",
        title: "Éclat d’Amour",
        jpTitle: "エクラ・ダムール",
        category: "Amethyst",
        description: [
            "やわらかな彩り、",
            "落ち着いた華やかさ。"
        ],
        price: "¥4,200",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155861399",
        image: "images/product7.jpeg",
        alt: "Rayon d’Or",
        title: "Rayon d’Or",
        jpTitle: "レヨン・ドール",
        category: "Lemon Quartz",
        description: [
            "派手すぎず、",
            "上品に寄り添う。"
        ],
        price: "¥3,600",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155862068",
        image: "images/product8.jpeg",
        alt: "Rosée des Bois",
        title: "Rosée des Bois",
        jpTitle: "ロゼ・デ・ボワ",
        category: "Moss green kyanite",
        description: [
            "シックな深み、",
            "知性と品のよさ。"
        ],
        price: "¥4,200",
        tag: "NEW"
    },
    {
        url: "https://cocoandcoco.base.shop/items/155862428",
        image: "images/product9.jpeg",
        alt: "Éclat d’Améthyste",
        title: "Éclat d’Améthyste",
        jpTitle: "エクラ・ダメティスト",
        category: "Amethyst",
        description: [
            "澄んだ透明感、",
            "落ち着いた華やかさ。"
        ],
        price: "¥3,600",
        tag: "NEW"
    }
];


/*


        <a
            href="https://cocoandcoco.base.shop/items/155862428"
            class="collection-item"
        >
            <img
                src="images/product9.jpeg"
                alt="Éclat d’Améthyste"
            >
            <div class="collection-info">
                <p class="collection-category">
                    Amethyst
                </p>
                <h3>
                    Éclat d’Améthyste<br><span class="jp-title">エクラ・ダメティスト</span>
                </h3>
                <p>
                    澄んだ透明感、<br>
                    落ち着いた華やかさ。
                </p>
            </div>
        </a>
*/

/*
<div class="product-grid">
            
            <a
                href="https://cocoandcoco.base.shop/items/155857470"
                class="product-card"
            >
                <div class="product-image">
                    <img
                        src="images/product1.jpeg"
                        alt="天然石アクセサリー"
                    >
                    <span class="product-tag">
                        NEW
                    </span>
                </div>
                <div class="product-info">
                    <p class="product-category">
                        Neon Blue Apatite
                    </p>
                    <h3>
                        Éclat d’Azur<br><span class="jp-title">エクラ・ダジュール</span>
                    </h3>
                    <p class="product-description">
                        自由な発想、<br>
                        気持ちを爽やかに。
                    </p>
                    <p class="product-price">
                        ¥4,800
                    </p>
                </div>
            </a>
</div>
*/

/*
const productList = document.getElementById("product-grid");
products.forEach(product => {
    const card = document.createElement("a");
    card.href = product.url;
    card.className = "product-card";
    card.innerHTML = `
        <div class="product-image">
            <img
                src="${product.image}"
                alt="${product.alt}"
            >
            ${
                product.tag
                ? `<span class="product-tag">${product.tag}</span>`
                : ""
            }
        </div>
        <div class="product-info">
            <p class="product-category">
                ${product.category}
            </p>
            <h3>
                ${product.title}<br>
                <span class="jp-title">
                    ${product.jpTitle}
                </span>
            </h3>
            <p class="product-description">
                ${product.description.join("<br>")}
            </p>
            <p class="product-price">
                ${product.price}
            </p>
        </div>
    `;
    productList.appendChild(card);
});
*/

/*
<div class="collection-grid">
<a
            href="https://cocoandcoco.base.shop/items/155858614"
            class="collection-item"
        >
            <img
                src="images/product2.jpeg"
                alt="Éclat des Astres"
            >
            <div class="collection-info">
                <p class="collection-category">
                    Lapis lazuli
                </p>
                <h3>
                    Éclat des Astres<br><span class="jp-title">エクラ・デ・アストル</span>
                </h3>
                <p>
                    本質を見つめ、<br>
                    視野を広げる。
                </p>
            </div>
        </a>
</div>
*/

const productList = document.getElementById("collection-grid");//("product-grid");
products.forEach(product => {
    const card = document.createElement("a");
    card.href = product.url;
    card.className = "collection-item";//"product-card";
    card.innerHTML = `
        <img
            src="${product.image}"
            alt="${product.alt}"
        >
        <div class="collection-info">
            <p class="collection-category">
                ${product.category}
            </p>
            <h3>
                ${product.title}<br><span class="jp-title">${product.jpTitle}</span>
            </h3>
            <p>
                ${product.description.join("<br>")}
            </p>
        </div>
    `;
    productList.appendChild(card);
});



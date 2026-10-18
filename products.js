const products = [
	{
		url: "https://cocoandcoco.base.shop/items/158506371",
		image: "images/product10.jpeg",
		alt: "Iris Opal",
		title: "Iris Opal",
		jpTitle: "虹彩のオパール ",
		category: "Opal",
		description: [
			"自由な発想",
			"自分らしい魅力"
		],
		price: "¥6,400",
		tag: ""
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506384",
		image: "images/product12.jpeg",
		alt: "Crimson Ruby",
		title: "Crimson Ruby",
		jpTitle: "深紅のルビー",
		category: "Ruby",
		description: [
			"洗練された華やかさ",
			"上品な彩り"
		],
		price: "¥8,800",
		tag: ""
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506389",
		image: "images/product13.jpeg",
		alt: "Iris Drop",
		title: "Iris Drop",
		jpTitle: "虹彩の雫",
		category: "Opal",
		description: [
			"優雅な輝き",
			"上品な彩り"
		],
		price: "¥6,400",
		tag: ""
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506394",
		image: "images/product14.jpeg",
		alt: "Crimson Drop",
		title: "Crimson Drop",
		jpTitle: "深紅の雫",
		category: "Ruby",
		description: [
			"優雅な光沢",
			"上品な華やかさ"
		],
		price: "¥6,400",
		tag: ""
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506398",
		image: "images/product15.jpeg",
		alt: "Crimson Rough Stone",
		title: "Crimson Rough Stone",
		jpTitle: "深紅の原石",
		category: "Ruby",
		description: [
			"優雅な光沢",
			"気品と個性"
		],
		price: "¥6,400",
		tag: ""
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506406",
		image: "images/product16.jpeg",
		alt: "Starlit Rose Pendant Top",
		title: "Starlit Rose Pendant Top",
		jpTitle: "星空と薔薇のペンダントトップ",
		category: "Lapis Lazuli",
		description: [
			"優しい彩り",
			"知的で華やか"
		],
		price: "¥18,000",
		tag: ""
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506411",
		image: "images/product17.jpeg",
		alt: "Aster Amethyst Pendant Top",
		title: "Aster Amethyst Pendant Top",
		jpTitle: "紫苑のアメジスト ペンダントトップ",
		category: "Amethyst",
		description: [
			"落ち着きと気品",
			"洗練された美しさ"
		],
		price: "¥18,000",
		tag: ""
	},
	{
		url: "https://cocoandcoco.base.shop/items/158506416",
		image: "images/product18.jpeg",
		alt: "Crimson Garnet Pendant Top",
		title: "Crimson Garnet Pendant Top",
		jpTitle: "深紅のガーネット ペンダントトップ",
		category: "Garnet",
		description: [
			"洗練された華やかさ",
			"特別感のある彩り"
		],
		price: "¥18,000",
		tag: ""
	},
    {
		url: "https://cocoandcoco.base.shop/items/163169974",
		image: "images/product19.jpeg",
		alt: "Oval Garnet Silver Ring",
		title: "Oval Garnet Silver Ring",
		jpTitle: "ガーネットオーバルシルバーリング ",
		category: "Garnet",
		description: [
			"大人の気品",
			"凛とした美しさ"
		],
		price: "¥10,800",
		tag: "New"
	},
	{
		url: "https://cocoandcoco.base.shop/items/163169983",
		image: "images/product20.jpeg",
		alt: "Oval Tanzanite Silver Ring",
		title: "Oval Tanzanite Silver Ring",
		jpTitle: "タンザナイトオーバシルバーリング",
		category: "Tanzanite",
		description: [
			"特別な彩り",
			"さりげない華やかさ"
		],
		price: "¥8,800",
		tag: "New"
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



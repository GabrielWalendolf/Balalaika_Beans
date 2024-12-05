const Coffees = {
    template: `
<div class="about-card">
<body>
    <header class="coffees">
        <h1>Menu de Café</h1>
    </header>
    <main>
        <section class="menu-section">
            <h2>Balalaikas</h2>
            <div class="menu-item" v-for="item in balalaikas" :key="item.name">
                <span>{{ item.name }}</span>
                <span>{{ item.price }}</span>
                <img :src="item.image" :alt="item.name" class="menu-image">
            </div>
        </section>
        <section class="menu-section">
            <h2>Sabores Extras</h2>
            <div class="menu-item" v-for="item in extras" :key="item.name">
                <span>{{ item.name }}</span>
                <span>{{ item.price }}</span>
                <img :src="item.image" :alt="item.name" class="menu-image">
            </div>
        </section>
        <section class="menu-section">
            <h2>Acompanhamentos</h2>
            <div class="menu-item" v-for="item in sides" :key="item.name">
                <span>{{ item.name }}</span>
                <span>{{ item.price }}</span>
                <img :src="item.image" :alt="item.name" class="menu-image">
            </div>
        </section>
    </main>
</body>
</div>
    `,
    data() {
        return {
            balalaikas: [
                { name: "Balalaika's Classic", price: "R$ 5,00", image: "/Images/Balalaika's Classic.webp" },
                { name: "Balalaika's Express", price: "R$ 8,00", image: "/Images/Balalaika's Express.webp" },
                { name: "Rasputin's Latte", price: "R$ 7,50", image: "/Images/Rasputin's Latte.webp" },
                { name: "Rasputin's Balalaika Beans Prototype_001", price: "R$ 15,00", image: "/Images/Rasputin's Balalaika Beans Prototype_001.png" },
            ],
            extras: [
                { name: "Medina's Ice", price: "R$ 9,00", image: "/Images/Medina's Ice.webp" },
                { name: "Medina's Coffee (Limited)", price: "R$ 8,50", image: "/Images/Medina's Coffee (Limited).webp" },
                { name: "Medina's Latte (Limited)", price: "R$ 9,00", image: "/Images/Medina's Latte (Limited).webp" },
                { name: "Ultra Coffee", price: "R$ 12,00", image: "path/to/ultra.jpg" },
            ],
            sides: [
                { name: "Pão de Queijo", price: "R$ 4,00", image: "path/to/pao.jpg" },
                { name: "Biscoito", price: "R$ 3,50", image: "path/to/biscoito.jpg" },
                { name: "Croissant", price: "R$ 6,00", image: "path/to/croissant.jpg" },
                { name: "Bolo de Cenoura", price: "R$ 8,00", image: "path/to/bolo.jpg" },
            ],
        };
    },
}
export default Coffees;


const VALID_KEY = "secret_key"
module.exports = {
    validateApiKey: (request) => {
        const apiKey = request.query.api_key
        const encodedKey = Buffer.from(VALID_KEY).toString('base64')
        return encodedKey === apiKey
    },
    validateApiKeyHeader: (request) => {
        const apiKey = request.get("Authorization")
        const encodedKey = Buffer.from(VALID_KEY).toString('base64')
        return encodedKey === apiKey
    },
    collectData: () => {
        const products = [
            {
                id: Number((Math.random()*10000).toFixed(0)),
                image_url: 'https://images.kabum.com.br/produtos/fotos/148917/processador-intel-core-i5-11400f-11-geracao-cache-12mb-2-6-ghz-4-4ghz-turbo-lga1200-bx8070811400f_1615574166_gg.jpg',
                name: 'Processador Intel Core i5-11400F, 2.6 GHz (4.4GHz Turbo), Cache 12MB, 6 Núcleos, 12 Threads, LGA1200 - BX8070811400F',
                brand: 'Intel',
                sku: '148917',
                unit_price: 1082.34,
                list_price: 859.99,
                has_discount: true,
                related_product_ids: [
                    {
                        id: Number((Math.random()*10000).toFixed(0)),
                        image_url: 'https://images0.kabum.com.br/produtos/fotos/sync_mirakl/315050/Processador-Intel-Core-i5-12400F-2-5GHz-4-4GHz-Turbo-12-Gera-o-6-Cores-12-Threads-LGA-1700-BX8071512400F_1669743514_m.jpg',
                        link: 'https://www.kabum.com.br/produto/315050/processador-intel-core-i5-12400f-2-5ghz-4-4ghz-turbo-12-geracao-6-cores-12-threads-lga-1700-bx8071512400f',
                        price: 1664.28
                    },
                    {
                        id: Number((Math.random()*10000).toFixed(0)),
                        image_url: 'https://images0.kabum.com.br/produtos/fotos/112990/processador-intel-core-i5-10400-cache-12mb-2-9ghz-lga-1200-bx8070110400_1589200168_m.jpg',
                        link: 'https://www.kabum.com.br/produto/112990/processador-intel-core-i5-10400-2-9ghz-4-3ghz-max-turbo-cache-12mb-lga-1200-bx8070110400',
                        price: 1069.99
                    },
                ]
            },
            {
                id: Number((Math.random()*10000).toFixed(0)),
                image_url: 'https://images.kabum.com.br/produtos/fotos/184275/placa-de-video-asus-dual-nvidia-geforce-rtx-3060-ti-v2-oc-edition-14-gbps-8gb-gddr6-dlss-lhr-ray-tracing-90yv0g1j-m0na00_1629294832_gg.jpg',
                name: 'Placa de Vídeo RTX 3060 Ti DUAL O8G V2 Asus NVIDIA GeForce, 8GB GDDR6, RGB, DLSS, LHR, Ray Tracing',
                brand: 'Asus',
                sku: '184275',
                unit_price: 4245.87,
                list_price: 3399.99,
                has_discount: true,
                related_product_ids: [
                    {
                        id: Number((Math.random()*10000).toFixed(0)),
                        image_url: 'https://images4.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244899_m.jpg',
                        link: 'https://www.kabum.com.br/produto/164854/placa-de-video-rtx-3060-asus-dual-o12g-v2-nvidia-geforce-lhr-12gb-gddr6-15-gbps-ray-tracing-dlss-90yv0gb2-m0na10',
                        price: 2379.99
                    },
                    {
                        id: Number((Math.random()*10000).toFixed(0)),
                        image_url: 'https://images4.kabum.com.br/produtos/fotos/164854/placa-de-video-asus-nvidia-dual-rtx-3060-o12g-v2-15-gbps-12gb-gddr6-ray-tracing-dlss-90yv0gb2-m0na10_1623244899_m.jpg',
                        link: 'https://www.kabum.com.br/produto/213718/placa-de-video-rtx-3060-ti-8g-mini-v2-asus-dual-nvidia-geforce-rgb-8gb-gddr6-lhr-dlss-ray-tracing-90yv0ft3-m0na00',
                        price: 3059.99
                    },
                ],
            }
        ]
        return products
    }
}
let categoryObjects = {
    "Coifa e Depurador": {
        label: "Coifas e Depuradores",
        page: 'store/category',
        params: {
            department: "eletrodomesticos",
            category: "coifa-e-depurador"
        }
    },
    "Geladeira - Refrigerador": {
        label: "Geladeiras e Refrigeradores",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "geladeira---refrigerador"
        }
    },
    "Freezer": {
        label: "Freezers",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "freezer"
        }
    },
    "Frigobar": {
        label: "Compactos",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "compactos"
        }
    },
    "Adega": {
        label: "Adegas",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "adega"
        }
    },
    "Fogão": {
        label: "Fogões",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "fogao"
        }
    },
    "Cooktop": {
        label: "Cooktops",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "cooktop"
        }
    },
    "Forno": {
        label: "Fornos",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "forno"
        }
    },
    "Lava-Louças": {
        label: "Lava-louças",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "lava-loucas"
        }
    },
    "Micro-ondas": {
        label: "Micro-ondas",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "micro-ondas"
        }
    },
    "Chaleira": {
        label: "Chaleiras",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "chaleira"
        }
    },
    "Lavadora de Roupas": {
        label: "Lavadoras de Roupas",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "lavadora-de-roupas"
        }
    },
    "Lava e Seca": {
        label: "Lava e Seca",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "lava-e-seca"
        }
    },
    "Secadora de Roupas": {
        label: "Secadoras de Roupas",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "secadora-de-roupas"
        }
    },
    "Bblend": {
        label: "B.blend",
        page: "store/category",
        params: {
            department: "eletrodomesticos",
            category: "bblend"
        }
    }
}

const  deparCategoryList = (categories) => {
	
    let splited = categories[1].split('/');
    if(splited.length <= 3) {
        splited = categories[0].split('/');
    }


    let categoryTerm = splited[2]


    return categoryObjects[categoryTerm]
}

export { categoryObjects }

export default deparCategoryList;
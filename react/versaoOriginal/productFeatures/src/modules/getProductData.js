const getProductData = function (categoryList) {
    try {
        categoryList = categoryList[0].split("/");
        let department = categoryList[1];
        let category = categoryList[2];
        let categoryName = categoryList[3];

        return {
            category,
            department,
            categoryName
        }
    } catch(err) {

        console.error(err);

    }
}

export default getProductData;
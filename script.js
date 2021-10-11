(function () {
    let aTags = document.getElementsByTagName("a");

    for (let i = 0, len = aTags.length; i < len; i++) {
        let a = aTags[i]
        let id = a.id
        if (id != null && id !== "") {
            a.href = "https://creator.nightcafe.studio/creation/" + id
            let img = document.createElement("img");
            img.src = `https://ik.imagekit.io/nightcafe/jobs/${id}/${id}.jpg?tr=w-1600,c-at_max`
            a.append(img)
        }
    }
})();

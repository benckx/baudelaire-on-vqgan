(function () {
    let aTags = document.getElementsByTagName("a");

    for (let i = 0, len = aTags.length; i < len; i++) {
        let a = aTags[i]
        let id = a.id
        if (id != null && id !== "") {
            a.href = `https://creator.nightcafe.studio/creation/${id}`
            let img = document.createElement("img");
            img.src = `https://ik.imagekit.io/nightcafe/jobs/${id}/${id}.jpg?tr=w-1600,c-at_max`
            // img.src = `img/${id}.jpg`
            a.append(img)
        }
    }

    let aboutMeDiv = document.getElementById("about-me")
    aboutMeDiv.innerHTML = `
        <p>
        <a href="https://about.me/benckx" target="_blank">about me</a>
        <br/>
        <a href="https://creator.nightcafe.studio/u/benckx" target="_blank">nightcafe profile</a>
        </p>
    `
})();

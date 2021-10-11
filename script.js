(function () {
    let aTags = document.getElementsByTagName("a");

    for (let i = 0, len = aTags.length; i < len; i++) {
        let a = aTags[i]
        let id = a.id
        if (id != null && id !== "") {
            a.href = `https://creator.nightcafe.studio/creation/${id}`
            let img = document.createElement("img");
            img.src = `https://ik.imagekit.io/nightcafe/jobs/${id}/${id}.jpg?tr=w-1600,c-at_max`
            a.append(img)
        }
    }

    let aboutMeDiv = document.getElementById("about-me")
    aboutMeDiv.innerHTML = `
        <p style="text-align: center; font-size: 14px">
        <a href="https://about.me/benckx">about me</a>
        <br/>
        <a href="https://creator.nightcafe.studio/u/benckx">nightcafe profile</a>
        </p>
    `
})();

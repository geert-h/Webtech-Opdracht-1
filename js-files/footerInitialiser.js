class footerInitialiser {

    generateFooter() {

        const footer = document.getElementsByTagName("footer")[0];
        footer.classList.add("footer");
        const nameDiv = document.createElement("div");
        nameDiv.classList.add("container");
        footer.appendChild(nameDiv);

        for(let i = 0; i < 3; i++){
            const h1 = document.createElement("h1");
            h1.classList.add("container__item");
            nameDiv.appendChild(h1);
        }

        document.querySelectorAll(".container__item")[0].textContent = "Geert Haans";
        document.querySelectorAll(".container__item")[1].textContent = "Aron den Ouden";
        document.querySelectorAll(".container__item")[2].textContent = "Aidan Bruinsma";

        const logoDiv = document.createElement("div");
        logoDiv.classList.add("container");
        logoDiv.classList.add("container2");
        footer.appendChild(logoDiv);

        const streamH1 = document.createElement("h1");
        streamH1.classList.add("container__item");
        streamH1.textContent = "Stream Top Gun: Maverick on";
        logoDiv.appendChild(streamH1);

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("container__logos");
        logoDiv.appendChild(imgDiv);

        for(let i = 0; i < 3; i++){
            const outImg = document.createElement("img");
            outImg.classList.add("container__image");
            const outRef = document.createElement("a");
            outRef.classList.add("container__logos--out");
            outRef.setAttribute('target', '_blank');
            outRef.appendChild(outImg);
            imgDiv.appendChild(outRef);
        }
        
        document.querySelectorAll(".container__image")[0].setAttribute('src', './resources/itunes.png');
        document.querySelectorAll(".container__image")[0].setAttribute('alt', 'iTunes-logo');
        document.querySelectorAll(".container__logos--out")[0].setAttribute('href', 'https://tv.apple.com/us/movie/top-gun-maverick/umc.cmc.670544bajp6s4pysx4rvctczz?playableId=tvs.sbd.9001%3A1622173773');

        document.querySelectorAll(".container__image")[1].setAttribute('src', './resources/googleplay.png');
        document.querySelectorAll(".container__image")[1].setAttribute('alt', 'googlePlay-logo');
        document.querySelectorAll(".container__logos--out")[1].setAttribute('href', 'https://play.google.com/store/movies/details/Top_Gun_Maverick?id=PnS5p3AmpRE.P&hl=en&gl=US&PAffiliateID=1100lHMW&PCamRefID=%5Bsubid_value%5D&pli=1');

        document.querySelectorAll(".container__image")[2].setAttribute('src', './resources/paramount.png');
        document.querySelectorAll(".container__image")[2].setAttribute('alt', 'paramountplus-logo');
        document.querySelectorAll(".container__logos--out")[2].setAttribute('href', 'https://www.paramountplus.com/intl/?redirectUrl=%2Fmovies%2Ftop-gun-maverick%2FAlcn0hcGx0HosdhcawKteH8DXh3RiOF7%2F%3FsearchReferral%3Dpublisher%26cbsclick%3DwDeVvxTEyxyNWauUyyWD3WMfUkAU39RbB3vyUk0%26vndid%3D159047%26clickid%3D159047%26sharedid%3Dmetacritic%26ftag%3DPPM-09-10aag1f%26dclid%3DCJmbkd3zs_0CFUwX4Aodi-oABg');

        const selectorDiv = document.createElement("div");
        selectorDiv.classList.add("container");
        selectorDiv.classList.add("container3");
        footer.appendChild(selectorDiv);
        


        const elementsRoot = document.querySelectorAll('body > *:not(script)');

        GenerateSelector(elementsRoot);

        var selectors = document.getElementsByClassName("container__selector");

        document.getElementsByClassName("container container3")[0].addEventListener("change", updateValues);

        function updateValues(event) {

            var selectorsCount = selectorDiv.childElementCount;

            DeleteSelectors();

            // var selectedRootElement = rootSelector.value;

            if (selectorDiv.lastChild.value != 0) {

                var lastSelectorValue = selectorDiv.lastChild.value;
                GenerateSelector(document.querySelectorAll('.' + CSS.escape(lastSelectorValue) + ' > *'));
                if(selectorDiv.lastChild.childElementCount == 1) {
                    selectorDiv.removeChild(selectorDiv.lastChild);
                }
            }

            for (let j = 0; j < selectorsCount; j++) {
                UpdateOptions(document.querySelectorAll('.' + CSS.escape(selectorDiv.childNodes[j]) + ' > *'), selectors[selectorDiv.childNodes[j]]);
            }
        }

        function GenerateSelector(parent) {

            const elementSelector = document.createElement("select");
            elementSelector.classList.add("container__selector");
            selectorDiv.appendChild(elementSelector);

            UpdateOptions(parent, elementSelector);
        }

        function UpdateOptions(parent, selector) {
            try {
                while(selector.length) {
                    let i = 0; 
                    selector.remove(i);
                    i++;
                }

                const first = document.createElement("option");
                first.value = "0";
                first.text = "Select Element";
                selector.appendChild(first);
            } catch (e) {}

            for (let i = 0; i < parent.length; i++) {
                const opt = document.createElement("option");
                opt.value = parent[i].classList;
                opt.text = parent[i].classList;
                selector.appendChild(opt);
            }
        }

        function DeleteSelectors() {

            for (let i = 0; i < selectorDiv.childElementCount; i++) {

                // if (selectorDiv.childNodes[i].value != 0) {
                //     continue;
                // }

                for (let j = 0; j < selectorDiv.childNodes[i].childElementCount; j++) {
                    console.log("i = " + selectorDiv.childNodes[i].value);
                    console.log("j = " + document.getElementsByClassName(selectorDiv.childNodes[i].value)[0].childNodes[j].value);
                    if (selectorDiv.childNodes[i].value != selectorDiv.childNodes[i].childNodes[j].value) {
                        continue;
                    }
                }

                console.log(i);

                let j = selectorDiv.childElementCount - i;

                console.log(j);

                for(j; j > 0; j--) {
                    selectorDiv.removeChild(selectorDiv.lastChild);
                }
            }
        }

        // const colorPicker = document.getElementById("color_picker");
        // console.log(colorPicker);
        // colorPicker.addEventListener("change", watchColorPicker, false);

        // function watchColorPicker(event) {
            
        //     var value = elementSelector.value;

        //     document.querySelectorAll("a").forEach((a) => {
        //         a.style.color = event.target.value;
        //     });

        //     document.getElementsByTagName(value)
        //     // document.querySelectorAll("h1").forEach((h1) => {
        //     //     h1.style.color = event.target.value;
        //     // });
        // }
    }
}

let footer = new footerInitialiser();
footer.generateFooter();


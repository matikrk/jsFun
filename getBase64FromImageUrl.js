function getBase64FromImageUrl(url) {
    return new Promise(res => {
        const img = new Image();

        img.setAttribute('crossOrigin', 'anonymous');

        img.onload = function () {
            const canvas = document.createElement("canvas");
            canvas.width = this.width;
            canvas.height = this.height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(this, 0, 0);

            const dataURL = canvas.toDataURL("image/png");
            res(dataURL);
        };

        img.src = url;
    });
};



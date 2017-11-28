 onmessage = function(event) {
 	//imgData: data==> pixels array , width, height
    var imgData = event.data,
        data = imgData.data,
        length = data.length,
        width = imgData.width;
    for (i = 0; i < length; ++i) {
        if ((i + 1) % 4 != 0) {
            if ((i + 4) % (width * 4) == 0) { // last pixel in a row
                data[i] = data[i - 4];
                data[i + 1] = data[i - 3];
                data[i + 2] = data[i - 2];
                data[i + 3] = data[i - 1];
                i += 4;
            } else {
                data[i] = 2 * data[i] - data[i + 4] - 0.5 * data[i + 4];
            }
        }
    }
    postMessage(imgData);
 }

 // onmessage = function (event) {
 //    var imgData = event.data,
 //        data = imgData.data,
 //        len  = data.length,
 //        width= imgData.width,
 //        average;

 //    for (var i = 0; i < len-4; i+=4) {
 //         average = (data[i]+data[i+1]+data[i+2]/3);
 //         data[i] = average;
 //         data[i+1]=average;
 //         data[i+2]=average;
 //        }
 //    postMessage(imgData);
 // }
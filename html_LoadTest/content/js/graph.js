/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 219.0, "minX": 0.0, "maxY": 10573.0, "series": [{"data": [[0.0, 219.0], [0.1, 220.0], [0.2, 220.0], [0.3, 220.0], [0.4, 223.0], [0.5, 225.0], [0.6, 225.0], [0.7, 225.0], [0.8, 225.0], [0.9, 226.0], [1.0, 226.0], [1.1, 226.0], [1.2, 226.0], [1.3, 226.0], [1.4, 227.0], [1.5, 227.0], [1.6, 227.0], [1.7, 227.0], [1.8, 227.0], [1.9, 229.0], [2.0, 229.0], [2.1, 229.0], [2.2, 229.0], [2.3, 229.0], [2.4, 229.0], [2.5, 230.0], [2.6, 230.0], [2.7, 230.0], [2.8, 230.0], [2.9, 231.0], [3.0, 231.0], [3.1, 231.0], [3.2, 231.0], [3.3, 231.0], [3.4, 231.0], [3.5, 231.0], [3.6, 232.0], [3.7, 232.0], [3.8, 232.0], [3.9, 232.0], [4.0, 232.0], [4.1, 232.0], [4.2, 233.0], [4.3, 233.0], [4.4, 234.0], [4.5, 234.0], [4.6, 234.0], [4.7, 234.0], [4.8, 234.0], [4.9, 234.0], [5.0, 234.0], [5.1, 235.0], [5.2, 235.0], [5.3, 235.0], [5.4, 235.0], [5.5, 236.0], [5.6, 236.0], [5.7, 236.0], [5.8, 236.0], [5.9, 236.0], [6.0, 236.0], [6.1, 236.0], [6.2, 237.0], [6.3, 237.0], [6.4, 238.0], [6.5, 238.0], [6.6, 238.0], [6.7, 238.0], [6.8, 238.0], [6.9, 238.0], [7.0, 238.0], [7.1, 238.0], [7.2, 238.0], [7.3, 238.0], [7.4, 238.0], [7.5, 238.0], [7.6, 238.0], [7.7, 239.0], [7.8, 239.0], [7.9, 239.0], [8.0, 239.0], [8.1, 239.0], [8.2, 239.0], [8.3, 239.0], [8.4, 239.0], [8.5, 239.0], [8.6, 240.0], [8.7, 240.0], [8.8, 240.0], [8.9, 240.0], [9.0, 240.0], [9.1, 240.0], [9.2, 240.0], [9.3, 240.0], [9.4, 240.0], [9.5, 241.0], [9.6, 241.0], [9.7, 241.0], [9.8, 241.0], [9.9, 241.0], [10.0, 241.0], [10.1, 241.0], [10.2, 241.0], [10.3, 241.0], [10.4, 241.0], [10.5, 241.0], [10.6, 242.0], [10.7, 242.0], [10.8, 242.0], [10.9, 242.0], [11.0, 242.0], [11.1, 243.0], [11.2, 243.0], [11.3, 243.0], [11.4, 243.0], [11.5, 243.0], [11.6, 243.0], [11.7, 243.0], [11.8, 243.0], [11.9, 243.0], [12.0, 243.0], [12.1, 243.0], [12.2, 243.0], [12.3, 243.0], [12.4, 243.0], [12.5, 244.0], [12.6, 244.0], [12.7, 244.0], [12.8, 244.0], [12.9, 244.0], [13.0, 244.0], [13.1, 244.0], [13.2, 244.0], [13.3, 245.0], [13.4, 245.0], [13.5, 245.0], [13.6, 245.0], [13.7, 245.0], [13.8, 246.0], [13.9, 246.0], [14.0, 246.0], [14.1, 246.0], [14.2, 246.0], [14.3, 246.0], [14.4, 246.0], [14.5, 246.0], [14.6, 246.0], [14.7, 246.0], [14.8, 246.0], [14.9, 246.0], [15.0, 246.0], [15.1, 246.0], [15.2, 246.0], [15.3, 247.0], [15.4, 247.0], [15.5, 247.0], [15.6, 247.0], [15.7, 247.0], [15.8, 248.0], [15.9, 248.0], [16.0, 248.0], [16.1, 248.0], [16.2, 248.0], [16.3, 249.0], [16.4, 249.0], [16.5, 249.0], [16.6, 249.0], [16.7, 249.0], [16.8, 249.0], [16.9, 249.0], [17.0, 249.0], [17.1, 249.0], [17.2, 249.0], [17.3, 249.0], [17.4, 249.0], [17.5, 250.0], [17.6, 250.0], [17.7, 250.0], [17.8, 250.0], [17.9, 250.0], [18.0, 250.0], [18.1, 250.0], [18.2, 250.0], [18.3, 250.0], [18.4, 250.0], [18.5, 251.0], [18.6, 251.0], [18.7, 251.0], [18.8, 251.0], [18.9, 251.0], [19.0, 251.0], [19.1, 251.0], [19.2, 251.0], [19.3, 251.0], [19.4, 251.0], [19.5, 252.0], [19.6, 252.0], [19.7, 252.0], [19.8, 252.0], [19.9, 252.0], [20.0, 252.0], [20.1, 252.0], [20.2, 252.0], [20.3, 253.0], [20.4, 253.0], [20.5, 253.0], [20.6, 253.0], [20.7, 253.0], [20.8, 253.0], [20.9, 253.0], [21.0, 253.0], [21.1, 253.0], [21.2, 253.0], [21.3, 254.0], [21.4, 254.0], [21.5, 254.0], [21.6, 254.0], [21.7, 254.0], [21.8, 254.0], [21.9, 254.0], [22.0, 254.0], [22.1, 255.0], [22.2, 255.0], [22.3, 256.0], [22.4, 256.0], [22.5, 256.0], [22.6, 256.0], [22.7, 256.0], [22.8, 256.0], [22.9, 256.0], [23.0, 256.0], [23.1, 256.0], [23.2, 256.0], [23.3, 256.0], [23.4, 256.0], [23.5, 257.0], [23.6, 257.0], [23.7, 257.0], [23.8, 257.0], [23.9, 257.0], [24.0, 257.0], [24.1, 257.0], [24.2, 257.0], [24.3, 258.0], [24.4, 258.0], [24.5, 258.0], [24.6, 258.0], [24.7, 258.0], [24.8, 258.0], [24.9, 258.0], [25.0, 258.0], [25.1, 258.0], [25.2, 258.0], [25.3, 258.0], [25.4, 259.0], [25.5, 259.0], [25.6, 259.0], [25.7, 259.0], [25.8, 259.0], [25.9, 259.0], [26.0, 259.0], [26.1, 259.0], [26.2, 259.0], [26.3, 259.0], [26.4, 259.0], [26.5, 259.0], [26.6, 259.0], [26.7, 259.0], [26.8, 259.0], [26.9, 259.0], [27.0, 259.0], [27.1, 259.0], [27.2, 260.0], [27.3, 260.0], [27.4, 260.0], [27.5, 260.0], [27.6, 260.0], [27.7, 260.0], [27.8, 260.0], [27.9, 260.0], [28.0, 260.0], [28.1, 261.0], [28.2, 261.0], [28.3, 261.0], [28.4, 261.0], [28.5, 261.0], [28.6, 261.0], [28.7, 261.0], [28.8, 262.0], [28.9, 262.0], [29.0, 262.0], [29.1, 262.0], [29.2, 262.0], [29.3, 262.0], [29.4, 262.0], [29.5, 262.0], [29.6, 263.0], [29.7, 263.0], [29.8, 263.0], [29.9, 263.0], [30.0, 263.0], [30.1, 263.0], [30.2, 263.0], [30.3, 264.0], [30.4, 264.0], [30.5, 264.0], [30.6, 264.0], [30.7, 264.0], [30.8, 264.0], [30.9, 264.0], [31.0, 264.0], [31.1, 264.0], [31.2, 264.0], [31.3, 264.0], [31.4, 265.0], [31.5, 265.0], [31.6, 265.0], [31.7, 265.0], [31.8, 265.0], [31.9, 266.0], [32.0, 266.0], [32.1, 266.0], [32.2, 266.0], [32.3, 266.0], [32.4, 266.0], [32.5, 266.0], [32.6, 266.0], [32.7, 266.0], [32.8, 266.0], [32.9, 267.0], [33.0, 267.0], [33.1, 267.0], [33.2, 267.0], [33.3, 267.0], [33.4, 267.0], [33.5, 267.0], [33.6, 268.0], [33.7, 268.0], [33.8, 268.0], [33.9, 268.0], [34.0, 268.0], [34.1, 268.0], [34.2, 268.0], [34.3, 268.0], [34.4, 269.0], [34.5, 269.0], [34.6, 269.0], [34.7, 269.0], [34.8, 269.0], [34.9, 269.0], [35.0, 269.0], [35.1, 270.0], [35.2, 270.0], [35.3, 270.0], [35.4, 270.0], [35.5, 270.0], [35.6, 270.0], [35.7, 271.0], [35.8, 271.0], [35.9, 271.0], [36.0, 271.0], [36.1, 271.0], [36.2, 271.0], [36.3, 271.0], [36.4, 271.0], [36.5, 272.0], [36.6, 272.0], [36.7, 273.0], [36.8, 273.0], [36.9, 273.0], [37.0, 273.0], [37.1, 274.0], [37.2, 274.0], [37.3, 275.0], [37.4, 275.0], [37.5, 275.0], [37.6, 275.0], [37.7, 275.0], [37.8, 275.0], [37.9, 275.0], [38.0, 275.0], [38.1, 275.0], [38.2, 276.0], [38.3, 276.0], [38.4, 276.0], [38.5, 276.0], [38.6, 276.0], [38.7, 276.0], [38.8, 276.0], [38.9, 276.0], [39.0, 276.0], [39.1, 276.0], [39.2, 277.0], [39.3, 278.0], [39.4, 278.0], [39.5, 278.0], [39.6, 278.0], [39.7, 279.0], [39.8, 279.0], [39.9, 279.0], [40.0, 279.0], [40.1, 279.0], [40.2, 279.0], [40.3, 280.0], [40.4, 280.0], [40.5, 280.0], [40.6, 280.0], [40.7, 280.0], [40.8, 280.0], [40.9, 281.0], [41.0, 281.0], [41.1, 281.0], [41.2, 281.0], [41.3, 281.0], [41.4, 281.0], [41.5, 281.0], [41.6, 281.0], [41.7, 281.0], [41.8, 281.0], [41.9, 282.0], [42.0, 282.0], [42.1, 282.0], [42.2, 282.0], [42.3, 282.0], [42.4, 282.0], [42.5, 282.0], [42.6, 282.0], [42.7, 282.0], [42.8, 282.0], [42.9, 283.0], [43.0, 283.0], [43.1, 283.0], [43.2, 283.0], [43.3, 283.0], [43.4, 283.0], [43.5, 283.0], [43.6, 284.0], [43.7, 284.0], [43.8, 284.0], [43.9, 285.0], [44.0, 285.0], [44.1, 285.0], [44.2, 285.0], [44.3, 285.0], [44.4, 285.0], [44.5, 286.0], [44.6, 287.0], [44.7, 287.0], [44.8, 287.0], [44.9, 287.0], [45.0, 287.0], [45.1, 288.0], [45.2, 289.0], [45.3, 290.0], [45.4, 290.0], [45.5, 290.0], [45.6, 290.0], [45.7, 290.0], [45.8, 290.0], [45.9, 290.0], [46.0, 290.0], [46.1, 291.0], [46.2, 291.0], [46.3, 291.0], [46.4, 291.0], [46.5, 291.0], [46.6, 292.0], [46.7, 292.0], [46.8, 292.0], [46.9, 292.0], [47.0, 293.0], [47.1, 293.0], [47.2, 293.0], [47.3, 293.0], [47.4, 294.0], [47.5, 294.0], [47.6, 294.0], [47.7, 294.0], [47.8, 294.0], [47.9, 294.0], [48.0, 294.0], [48.1, 294.0], [48.2, 295.0], [48.3, 295.0], [48.4, 295.0], [48.5, 295.0], [48.6, 295.0], [48.7, 295.0], [48.8, 295.0], [48.9, 296.0], [49.0, 296.0], [49.1, 296.0], [49.2, 296.0], [49.3, 296.0], [49.4, 296.0], [49.5, 296.0], [49.6, 297.0], [49.7, 297.0], [49.8, 297.0], [49.9, 297.0], [50.0, 297.0], [50.1, 297.0], [50.2, 298.0], [50.3, 298.0], [50.4, 298.0], [50.5, 298.0], [50.6, 298.0], [50.7, 298.0], [50.8, 299.0], [50.9, 299.0], [51.0, 299.0], [51.1, 299.0], [51.2, 299.0], [51.3, 300.0], [51.4, 300.0], [51.5, 301.0], [51.6, 301.0], [51.7, 301.0], [51.8, 302.0], [51.9, 302.0], [52.0, 302.0], [52.1, 302.0], [52.2, 302.0], [52.3, 302.0], [52.4, 303.0], [52.5, 303.0], [52.6, 303.0], [52.7, 304.0], [52.8, 305.0], [52.9, 305.0], [53.0, 305.0], [53.1, 306.0], [53.2, 306.0], [53.3, 306.0], [53.4, 306.0], [53.5, 307.0], [53.6, 307.0], [53.7, 307.0], [53.8, 307.0], [53.9, 308.0], [54.0, 308.0], [54.1, 308.0], [54.2, 308.0], [54.3, 308.0], [54.4, 309.0], [54.5, 309.0], [54.6, 310.0], [54.7, 311.0], [54.8, 311.0], [54.9, 311.0], [55.0, 311.0], [55.1, 311.0], [55.2, 311.0], [55.3, 311.0], [55.4, 311.0], [55.5, 312.0], [55.6, 312.0], [55.7, 312.0], [55.8, 313.0], [55.9, 313.0], [56.0, 313.0], [56.1, 314.0], [56.2, 315.0], [56.3, 315.0], [56.4, 315.0], [56.5, 316.0], [56.6, 316.0], [56.7, 316.0], [56.8, 316.0], [56.9, 317.0], [57.0, 317.0], [57.1, 318.0], [57.2, 318.0], [57.3, 318.0], [57.4, 319.0], [57.5, 319.0], [57.6, 319.0], [57.7, 320.0], [57.8, 320.0], [57.9, 320.0], [58.0, 320.0], [58.1, 320.0], [58.2, 320.0], [58.3, 320.0], [58.4, 320.0], [58.5, 321.0], [58.6, 321.0], [58.7, 321.0], [58.8, 321.0], [58.9, 321.0], [59.0, 321.0], [59.1, 322.0], [59.2, 322.0], [59.3, 322.0], [59.4, 322.0], [59.5, 322.0], [59.6, 323.0], [59.7, 323.0], [59.8, 323.0], [59.9, 323.0], [60.0, 324.0], [60.1, 324.0], [60.2, 324.0], [60.3, 324.0], [60.4, 325.0], [60.5, 326.0], [60.6, 326.0], [60.7, 326.0], [60.8, 326.0], [60.9, 327.0], [61.0, 328.0], [61.1, 328.0], [61.2, 329.0], [61.3, 329.0], [61.4, 329.0], [61.5, 330.0], [61.6, 330.0], [61.7, 331.0], [61.8, 331.0], [61.9, 331.0], [62.0, 332.0], [62.1, 332.0], [62.2, 332.0], [62.3, 332.0], [62.4, 333.0], [62.5, 333.0], [62.6, 333.0], [62.7, 334.0], [62.8, 334.0], [62.9, 335.0], [63.0, 335.0], [63.1, 336.0], [63.2, 336.0], [63.3, 336.0], [63.4, 337.0], [63.5, 337.0], [63.6, 337.0], [63.7, 338.0], [63.8, 338.0], [63.9, 338.0], [64.0, 340.0], [64.1, 340.0], [64.2, 341.0], [64.3, 341.0], [64.4, 342.0], [64.5, 342.0], [64.6, 342.0], [64.7, 343.0], [64.8, 343.0], [64.9, 344.0], [65.0, 344.0], [65.1, 344.0], [65.2, 344.0], [65.3, 345.0], [65.4, 345.0], [65.5, 346.0], [65.6, 346.0], [65.7, 347.0], [65.8, 347.0], [65.9, 347.0], [66.0, 348.0], [66.1, 348.0], [66.2, 348.0], [66.3, 348.0], [66.4, 348.0], [66.5, 349.0], [66.6, 350.0], [66.7, 350.0], [66.8, 351.0], [66.9, 351.0], [67.0, 352.0], [67.1, 352.0], [67.2, 352.0], [67.3, 353.0], [67.4, 353.0], [67.5, 354.0], [67.6, 354.0], [67.7, 354.0], [67.8, 355.0], [67.9, 355.0], [68.0, 355.0], [68.1, 355.0], [68.2, 355.0], [68.3, 356.0], [68.4, 359.0], [68.5, 360.0], [68.6, 360.0], [68.7, 362.0], [68.8, 364.0], [68.9, 365.0], [69.0, 365.0], [69.1, 365.0], [69.2, 365.0], [69.3, 367.0], [69.4, 367.0], [69.5, 367.0], [69.6, 367.0], [69.7, 368.0], [69.8, 368.0], [69.9, 368.0], [70.0, 369.0], [70.1, 369.0], [70.2, 371.0], [70.3, 371.0], [70.4, 371.0], [70.5, 372.0], [70.6, 372.0], [70.7, 373.0], [70.8, 373.0], [70.9, 374.0], [71.0, 374.0], [71.1, 374.0], [71.2, 374.0], [71.3, 374.0], [71.4, 376.0], [71.5, 376.0], [71.6, 376.0], [71.7, 377.0], [71.8, 377.0], [71.9, 380.0], [72.0, 382.0], [72.1, 382.0], [72.2, 383.0], [72.3, 383.0], [72.4, 383.0], [72.5, 384.0], [72.6, 384.0], [72.7, 386.0], [72.8, 387.0], [72.9, 387.0], [73.0, 388.0], [73.1, 388.0], [73.2, 390.0], [73.3, 391.0], [73.4, 392.0], [73.5, 392.0], [73.6, 392.0], [73.7, 392.0], [73.8, 393.0], [73.9, 393.0], [74.0, 393.0], [74.1, 396.0], [74.2, 396.0], [74.3, 398.0], [74.4, 398.0], [74.5, 398.0], [74.6, 399.0], [74.7, 401.0], [74.8, 401.0], [74.9, 401.0], [75.0, 402.0], [75.1, 402.0], [75.2, 402.0], [75.3, 402.0], [75.4, 402.0], [75.5, 404.0], [75.6, 405.0], [75.7, 405.0], [75.8, 406.0], [75.9, 407.0], [76.0, 408.0], [76.1, 409.0], [76.2, 409.0], [76.3, 411.0], [76.4, 411.0], [76.5, 412.0], [76.6, 413.0], [76.7, 414.0], [76.8, 414.0], [76.9, 417.0], [77.0, 420.0], [77.1, 421.0], [77.2, 421.0], [77.3, 422.0], [77.4, 423.0], [77.5, 423.0], [77.6, 424.0], [77.7, 430.0], [77.8, 430.0], [77.9, 431.0], [78.0, 431.0], [78.1, 432.0], [78.2, 432.0], [78.3, 433.0], [78.4, 433.0], [78.5, 435.0], [78.6, 436.0], [78.7, 438.0], [78.8, 438.0], [78.9, 439.0], [79.0, 440.0], [79.1, 441.0], [79.2, 443.0], [79.3, 444.0], [79.4, 444.0], [79.5, 445.0], [79.6, 445.0], [79.7, 452.0], [79.8, 456.0], [79.9, 460.0], [80.0, 460.0], [80.1, 461.0], [80.2, 461.0], [80.3, 461.0], [80.4, 462.0], [80.5, 462.0], [80.6, 466.0], [80.7, 466.0], [80.8, 467.0], [80.9, 468.0], [81.0, 470.0], [81.1, 472.0], [81.2, 472.0], [81.3, 473.0], [81.4, 473.0], [81.5, 474.0], [81.6, 475.0], [81.7, 479.0], [81.8, 483.0], [81.9, 483.0], [82.0, 485.0], [82.1, 485.0], [82.2, 492.0], [82.3, 494.0], [82.4, 496.0], [82.5, 498.0], [82.6, 498.0], [82.7, 499.0], [82.8, 504.0], [82.9, 509.0], [83.0, 509.0], [83.1, 512.0], [83.2, 514.0], [83.3, 524.0], [83.4, 528.0], [83.5, 531.0], [83.6, 533.0], [83.7, 533.0], [83.8, 548.0], [83.9, 548.0], [84.0, 553.0], [84.1, 557.0], [84.2, 570.0], [84.3, 581.0], [84.4, 589.0], [84.5, 595.0], [84.6, 597.0], [84.7, 603.0], [84.8, 615.0], [84.9, 623.0], [85.0, 670.0], [85.1, 684.0], [85.2, 698.0], [85.3, 705.0], [85.4, 722.0], [85.5, 749.0], [85.6, 763.0], [85.7, 769.0], [85.8, 769.0], [85.9, 813.0], [86.0, 816.0], [86.1, 851.0], [86.2, 878.0], [86.3, 960.0], [86.4, 995.0], [86.5, 1009.0], [86.6, 1013.0], [86.7, 1024.0], [86.8, 1057.0], [86.9, 1116.0], [87.0, 1280.0], [87.1, 1310.0], [87.2, 1319.0], [87.3, 1356.0], [87.4, 1385.0], [87.5, 1448.0], [87.6, 1502.0], [87.7, 1507.0], [87.8, 1509.0], [87.9, 1595.0], [88.0, 1718.0], [88.1, 1720.0], [88.2, 1800.0], [88.3, 2067.0], [88.4, 2071.0], [88.5, 2105.0], [88.6, 2269.0], [88.7, 2309.0], [88.8, 2517.0], [88.9, 2679.0], [89.0, 2806.0], [89.1, 2818.0], [89.2, 3090.0], [89.3, 3411.0], [89.4, 3502.0], [89.5, 3672.0], [89.6, 4081.0], [89.7, 4218.0], [89.8, 4468.0], [89.9, 4514.0], [90.0, 4633.0], [90.1, 4809.0], [90.2, 5788.0], [90.3, 7267.0], [90.4, 7336.0], [90.5, 7791.0], [90.6, 7962.0], [90.7, 8208.0], [90.8, 8387.0], [90.9, 8590.0], [91.0, 8783.0], [91.1, 8872.0], [91.2, 9060.0], [91.3, 9287.0], [91.4, 9485.0], [91.5, 9558.0], [91.6, 9636.0], [91.7, 9917.0], [91.8, 9925.0], [91.9, 9929.0], [92.0, 9959.0], [92.1, 9960.0], [92.2, 9962.0], [92.3, 9974.0], [92.4, 9994.0], [92.5, 9999.0], [92.6, 10006.0], [92.7, 10024.0], [92.8, 10039.0], [92.9, 10061.0], [93.0, 10121.0], [93.1, 10139.0], [93.2, 10142.0], [93.3, 10152.0], [93.4, 10158.0], [93.5, 10161.0], [93.6, 10162.0], [93.7, 10163.0], [93.8, 10167.0], [93.9, 10174.0], [94.0, 10187.0], [94.1, 10191.0], [94.2, 10191.0], [94.3, 10198.0], [94.4, 10201.0], [94.5, 10207.0], [94.6, 10212.0], [94.7, 10214.0], [94.8, 10216.0], [94.9, 10217.0], [95.0, 10220.0], [95.1, 10227.0], [95.2, 10227.0], [95.3, 10229.0], [95.4, 10236.0], [95.5, 10236.0], [95.6, 10238.0], [95.7, 10243.0], [95.8, 10243.0], [95.9, 10248.0], [96.0, 10253.0], [96.1, 10255.0], [96.2, 10255.0], [96.3, 10259.0], [96.4, 10264.0], [96.5, 10268.0], [96.6, 10272.0], [96.7, 10278.0], [96.8, 10283.0], [96.9, 10288.0], [97.0, 10289.0], [97.1, 10293.0], [97.2, 10294.0], [97.3, 10300.0], [97.4, 10307.0], [97.5, 10309.0], [97.6, 10313.0], [97.7, 10318.0], [97.8, 10324.0], [97.9, 10326.0], [98.0, 10335.0], [98.1, 10342.0], [98.2, 10350.0], [98.3, 10359.0], [98.4, 10363.0], [98.5, 10366.0], [98.6, 10369.0], [98.7, 10371.0], [98.8, 10378.0], [98.9, 10380.0], [99.0, 10390.0], [99.1, 10420.0], [99.2, 10429.0], [99.3, 10431.0], [99.4, 10458.0], [99.5, 10464.0], [99.6, 10488.0], [99.7, 10555.0], [99.8, 10563.0], [99.9, 10573.0]], "isOverall": false, "label": "BlazeDemo Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 512.0, "series": [{"data": [[600.0, 6.0], [700.0, 6.0], [800.0, 4.0], [900.0, 2.0], [1000.0, 4.0], [1100.0, 1.0], [1200.0, 1.0], [1300.0, 4.0], [1400.0, 1.0], [1500.0, 4.0], [1700.0, 2.0], [1800.0, 1.0], [2000.0, 2.0], [2100.0, 1.0], [2300.0, 1.0], [2200.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 2.0], [3000.0, 1.0], [3400.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [4000.0, 1.0], [4200.0, 1.0], [4600.0, 1.0], [4500.0, 1.0], [4400.0, 1.0], [4800.0, 1.0], [5700.0, 1.0], [7300.0, 1.0], [7200.0, 1.0], [7700.0, 1.0], [7900.0, 1.0], [8700.0, 1.0], [8300.0, 1.0], [8500.0, 1.0], [8200.0, 1.0], [8800.0, 1.0], [9200.0, 1.0], [9000.0, 1.0], [9600.0, 1.0], [9500.0, 1.0], [9400.0, 1.0], [10100.0, 14.0], [10200.0, 29.0], [10000.0, 4.0], [9900.0, 9.0], [10400.0, 6.0], [10300.0, 18.0], [10500.0, 3.0], [200.0, 512.0], [300.0, 235.0], [400.0, 81.0], [500.0, 19.0]], "isOverall": false, "label": "BlazeDemo Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 15.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 828.0, "series": [{"data": [[0.0, 828.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 48.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 109.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 15.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.776923076923077, "minX": 1.62920922E12, "maxY": 18.172888015717092, "series": [{"data": [[1.62920928E12, 18.172888015717092], [1.62920934E12, 11.997229916897503], [1.62920922E12, 5.776923076923077]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62920934E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 252.25, "minX": 1.0, "maxY": 4985.6, "series": [{"data": [[2.0, 338.235294117647], [3.0, 341.86597938144314], [4.0, 491.7912087912089], [5.0, 575.2033898305086], [6.0, 549.9354838709678], [7.0, 618.4117647058824], [8.0, 836.3636363636364], [9.0, 4985.6], [10.0, 1539.4444444444446], [11.0, 1000.2083333333333], [12.0, 1634.2307692307688], [13.0, 1056.2], [14.0, 859.9999999999999], [15.0, 1172.2083333333337], [16.0, 1120.8125], [1.0, 252.25], [17.0, 3064.142857142857], [18.0, 1641.9999999999995], [19.0, 1854.710743801653], [20.0, 1371.3333333333337], [21.0, 2148.245901639344], [22.0, 2072.601941747573], [23.0, 1522.0169491525423], [24.0, 2108.2950819672124], [25.0, 1898.4999999999998], [26.0, 333.6666666666667]], "isOverall": false, "label": "BlazeDemo Request", "isController": false}, {"data": [[14.332000000000006, 1335.4209999999996]], "isOverall": false, "label": "BlazeDemo Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 26.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 249.16666666666666, "minX": 1.62920922E12, "maxY": 26730.733333333334, "series": [{"data": [[1.62920928E12, 26730.733333333334], [1.62920934E12, 19321.266666666666], [1.62920922E12, 6994.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62920928E12, 975.5833333333334], [1.62920934E12, 691.9166666666666], [1.62920922E12, 249.16666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62920934E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 525.2538461538462, "minX": 1.62920922E12, "maxY": 1746.722986247543, "series": [{"data": [[1.62920928E12, 1746.722986247543], [1.62920934E12, 1047.2465373961215], [1.62920922E12, 525.2538461538462]], "isOverall": false, "label": "BlazeDemo Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62920934E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 524.7076923076925, "minX": 1.62920922E12, "maxY": 1746.1119842829078, "series": [{"data": [[1.62920928E12, 1746.1119842829078], [1.62920934E12, 1046.581717451523], [1.62920922E12, 524.7076923076925]], "isOverall": false, "label": "BlazeDemo Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62920934E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 4.149584487534624, "minX": 1.62920922E12, "maxY": 8.007692307692304, "series": [{"data": [[1.62920928E12, 6.2121807465618915], [1.62920934E12, 4.149584487534624], [1.62920922E12, 8.007692307692304]], "isOverall": false, "label": "BlazeDemo Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62920934E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 219.0, "minX": 1.62920922E12, "maxY": 10573.0, "series": [{"data": [[1.62920928E12, 10573.0], [1.62920934E12, 10390.0], [1.62920922E12, 8872.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62920928E12, 9963.5], [1.62920934E12, 485.0], [1.62920922E12, 847.2000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62920928E12, 10464.72], [1.62920934E12, 10247.4], [1.62920922E12, 7915.959999999993]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62920928E12, 10268.6], [1.62920934E12, 9287.0], [1.62920922E12, 1760.0999999999935]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62920928E12, 225.0], [1.62920934E12, 225.0], [1.62920922E12, 219.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62920928E12, 324.0], [1.62920934E12, 281.0], [1.62920922E12, 264.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62920934E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 256.0, "minX": 1.0, "maxY": 10359.0, "series": [{"data": [[8.0, 308.0], [2.0, 1391.0], [9.0, 321.0], [10.0, 281.0], [11.0, 284.0], [3.0, 369.0], [12.0, 322.0], [13.0, 299.0], [14.0, 296.0], [15.0, 286.5], [1.0, 1385.0], [4.0, 514.0], [16.0, 319.0], [17.0, 322.5], [18.0, 256.0], [20.0, 277.0], [5.0, 308.5], [6.0, 296.0], [24.0, 265.5], [7.0, 313.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 10307.5], [4.0, 10324.0], [16.0, 10359.0], [17.0, 10299.0], [18.0, 10187.0], [5.0, 10191.0], [10.0, 10227.0], [20.0, 10142.0], [11.0, 10191.0], [12.0, 10306.5], [13.0, 10139.0], [14.0, 10212.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 255.0, "minX": 1.0, "maxY": 10359.0, "series": [{"data": [[8.0, 307.5], [2.0, 1390.0], [9.0, 320.5], [10.0, 281.0], [11.0, 284.0], [3.0, 368.0], [12.0, 322.0], [13.0, 299.0], [14.0, 296.0], [15.0, 286.0], [1.0, 1384.0], [4.0, 514.0], [16.0, 318.0], [17.0, 322.0], [18.0, 255.0], [20.0, 277.0], [5.0, 308.0], [6.0, 296.0], [24.0, 265.0], [7.0, 313.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 10307.5], [4.0, 10324.0], [16.0, 10359.0], [17.0, 10299.0], [18.0, 10187.0], [5.0, 10191.0], [10.0, 10227.0], [20.0, 10142.0], [11.0, 10191.0], [12.0, 10306.5], [13.0, 10139.0], [14.0, 10212.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 24.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.2333333333333334, "minX": 1.62920922E12, "maxY": 8.716666666666667, "series": [{"data": [[1.62920928E12, 8.716666666666667], [1.62920934E12, 5.716666666666667], [1.62920922E12, 2.2333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62920934E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.62920922E12, "maxY": 8.266666666666667, "series": [{"data": [[1.62920928E12, 8.266666666666667], [1.62920934E12, 5.983333333333333], [1.62920922E12, 2.1666666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62920928E12, 0.21666666666666667], [1.62920934E12, 0.03333333333333333]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62920934E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.62920922E12, "maxY": 8.266666666666667, "series": [{"data": [[1.62920928E12, 0.21666666666666667], [1.62920934E12, 0.03333333333333333]], "isOverall": false, "label": "BlazeDemo Request-failure", "isController": false}, {"data": [[1.62920928E12, 8.266666666666667], [1.62920934E12, 5.983333333333333], [1.62920922E12, 2.1666666666666665]], "isOverall": false, "label": "BlazeDemo Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62920934E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.62920922E12, "maxY": 8.266666666666667, "series": [{"data": [[1.62920928E12, 8.266666666666667], [1.62920934E12, 5.983333333333333], [1.62920922E12, 2.1666666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62920928E12, 0.21666666666666667], [1.62920934E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62920934E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


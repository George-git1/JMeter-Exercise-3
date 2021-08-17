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
        data: {"result": {"minY": 219.0, "minX": 0.0, "maxY": 42151.0, "series": [{"data": [[0.0, 219.0], [0.1, 225.0], [0.2, 226.0], [0.3, 227.0], [0.4, 228.0], [0.5, 229.0], [0.6, 229.0], [0.7, 230.0], [0.8, 230.0], [0.9, 230.0], [1.0, 231.0], [1.1, 231.0], [1.2, 231.0], [1.3, 232.0], [1.4, 232.0], [1.5, 232.0], [1.6, 233.0], [1.7, 233.0], [1.8, 233.0], [1.9, 233.0], [2.0, 234.0], [2.1, 234.0], [2.2, 234.0], [2.3, 234.0], [2.4, 235.0], [2.5, 235.0], [2.6, 235.0], [2.7, 235.0], [2.8, 235.0], [2.9, 236.0], [3.0, 236.0], [3.1, 236.0], [3.2, 236.0], [3.3, 236.0], [3.4, 236.0], [3.5, 237.0], [3.6, 237.0], [3.7, 237.0], [3.8, 237.0], [3.9, 237.0], [4.0, 238.0], [4.1, 238.0], [4.2, 238.0], [4.3, 238.0], [4.4, 238.0], [4.5, 238.0], [4.6, 239.0], [4.7, 239.0], [4.8, 239.0], [4.9, 239.0], [5.0, 239.0], [5.1, 239.0], [5.2, 240.0], [5.3, 240.0], [5.4, 240.0], [5.5, 240.0], [5.6, 240.0], [5.7, 240.0], [5.8, 241.0], [5.9, 241.0], [6.0, 241.0], [6.1, 241.0], [6.2, 241.0], [6.3, 241.0], [6.4, 241.0], [6.5, 242.0], [6.6, 242.0], [6.7, 242.0], [6.8, 242.0], [6.9, 242.0], [7.0, 242.0], [7.1, 242.0], [7.2, 243.0], [7.3, 243.0], [7.4, 243.0], [7.5, 243.0], [7.6, 243.0], [7.7, 243.0], [7.8, 243.0], [7.9, 243.0], [8.0, 244.0], [8.1, 244.0], [8.2, 244.0], [8.3, 244.0], [8.4, 244.0], [8.5, 244.0], [8.6, 244.0], [8.7, 244.0], [8.8, 244.0], [8.9, 245.0], [9.0, 245.0], [9.1, 245.0], [9.2, 245.0], [9.3, 245.0], [9.4, 245.0], [9.5, 245.0], [9.6, 245.0], [9.7, 246.0], [9.8, 246.0], [9.9, 246.0], [10.0, 246.0], [10.1, 246.0], [10.2, 246.0], [10.3, 246.0], [10.4, 246.0], [10.5, 247.0], [10.6, 247.0], [10.7, 247.0], [10.8, 247.0], [10.9, 247.0], [11.0, 247.0], [11.1, 247.0], [11.2, 247.0], [11.3, 248.0], [11.4, 248.0], [11.5, 248.0], [11.6, 248.0], [11.7, 248.0], [11.8, 248.0], [11.9, 248.0], [12.0, 248.0], [12.1, 248.0], [12.2, 249.0], [12.3, 249.0], [12.4, 249.0], [12.5, 249.0], [12.6, 249.0], [12.7, 249.0], [12.8, 249.0], [12.9, 249.0], [13.0, 249.0], [13.1, 250.0], [13.2, 250.0], [13.3, 250.0], [13.4, 250.0], [13.5, 250.0], [13.6, 250.0], [13.7, 250.0], [13.8, 250.0], [13.9, 250.0], [14.0, 250.0], [14.1, 251.0], [14.2, 251.0], [14.3, 251.0], [14.4, 251.0], [14.5, 251.0], [14.6, 251.0], [14.7, 251.0], [14.8, 251.0], [14.9, 251.0], [15.0, 251.0], [15.1, 252.0], [15.2, 252.0], [15.3, 252.0], [15.4, 252.0], [15.5, 252.0], [15.6, 252.0], [15.7, 252.0], [15.8, 252.0], [15.9, 252.0], [16.0, 253.0], [16.1, 253.0], [16.2, 253.0], [16.3, 253.0], [16.4, 253.0], [16.5, 253.0], [16.6, 253.0], [16.7, 253.0], [16.8, 253.0], [16.9, 253.0], [17.0, 254.0], [17.1, 254.0], [17.2, 254.0], [17.3, 254.0], [17.4, 254.0], [17.5, 254.0], [17.6, 254.0], [17.7, 254.0], [17.8, 254.0], [17.9, 254.0], [18.0, 255.0], [18.1, 255.0], [18.2, 255.0], [18.3, 255.0], [18.4, 255.0], [18.5, 255.0], [18.6, 255.0], [18.7, 255.0], [18.8, 255.0], [18.9, 255.0], [19.0, 255.0], [19.1, 256.0], [19.2, 256.0], [19.3, 256.0], [19.4, 256.0], [19.5, 256.0], [19.6, 256.0], [19.7, 256.0], [19.8, 256.0], [19.9, 256.0], [20.0, 257.0], [20.1, 257.0], [20.2, 257.0], [20.3, 257.0], [20.4, 257.0], [20.5, 257.0], [20.6, 257.0], [20.7, 257.0], [20.8, 257.0], [20.9, 257.0], [21.0, 258.0], [21.1, 258.0], [21.2, 258.0], [21.3, 258.0], [21.4, 258.0], [21.5, 258.0], [21.6, 258.0], [21.7, 258.0], [21.8, 258.0], [21.9, 258.0], [22.0, 259.0], [22.1, 259.0], [22.2, 259.0], [22.3, 259.0], [22.4, 259.0], [22.5, 259.0], [22.6, 259.0], [22.7, 259.0], [22.8, 259.0], [22.9, 259.0], [23.0, 259.0], [23.1, 260.0], [23.2, 260.0], [23.3, 260.0], [23.4, 260.0], [23.5, 260.0], [23.6, 260.0], [23.7, 260.0], [23.8, 260.0], [23.9, 260.0], [24.0, 260.0], [24.1, 260.0], [24.2, 261.0], [24.3, 261.0], [24.4, 261.0], [24.5, 261.0], [24.6, 261.0], [24.7, 261.0], [24.8, 261.0], [24.9, 261.0], [25.0, 261.0], [25.1, 261.0], [25.2, 262.0], [25.3, 262.0], [25.4, 262.0], [25.5, 262.0], [25.6, 262.0], [25.7, 262.0], [25.8, 262.0], [25.9, 262.0], [26.0, 262.0], [26.1, 262.0], [26.2, 263.0], [26.3, 263.0], [26.4, 263.0], [26.5, 263.0], [26.6, 263.0], [26.7, 263.0], [26.8, 263.0], [26.9, 263.0], [27.0, 263.0], [27.1, 263.0], [27.2, 264.0], [27.3, 264.0], [27.4, 264.0], [27.5, 264.0], [27.6, 264.0], [27.7, 264.0], [27.8, 264.0], [27.9, 264.0], [28.0, 264.0], [28.1, 264.0], [28.2, 265.0], [28.3, 265.0], [28.4, 265.0], [28.5, 265.0], [28.6, 265.0], [28.7, 265.0], [28.8, 265.0], [28.9, 265.0], [29.0, 265.0], [29.1, 266.0], [29.2, 266.0], [29.3, 266.0], [29.4, 266.0], [29.5, 266.0], [29.6, 266.0], [29.7, 266.0], [29.8, 266.0], [29.9, 266.0], [30.0, 266.0], [30.1, 267.0], [30.2, 267.0], [30.3, 267.0], [30.4, 267.0], [30.5, 267.0], [30.6, 267.0], [30.7, 267.0], [30.8, 267.0], [30.9, 267.0], [31.0, 268.0], [31.1, 268.0], [31.2, 268.0], [31.3, 268.0], [31.4, 268.0], [31.5, 268.0], [31.6, 268.0], [31.7, 268.0], [31.8, 268.0], [31.9, 269.0], [32.0, 269.0], [32.1, 269.0], [32.2, 269.0], [32.3, 269.0], [32.4, 269.0], [32.5, 269.0], [32.6, 269.0], [32.7, 269.0], [32.8, 269.0], [32.9, 270.0], [33.0, 270.0], [33.1, 270.0], [33.2, 270.0], [33.3, 270.0], [33.4, 270.0], [33.5, 270.0], [33.6, 270.0], [33.7, 270.0], [33.8, 271.0], [33.9, 271.0], [34.0, 271.0], [34.1, 271.0], [34.2, 271.0], [34.3, 271.0], [34.4, 271.0], [34.5, 271.0], [34.6, 271.0], [34.7, 272.0], [34.8, 272.0], [34.9, 272.0], [35.0, 272.0], [35.1, 272.0], [35.2, 272.0], [35.3, 272.0], [35.4, 272.0], [35.5, 272.0], [35.6, 273.0], [35.7, 273.0], [35.8, 273.0], [35.9, 273.0], [36.0, 273.0], [36.1, 273.0], [36.2, 273.0], [36.3, 273.0], [36.4, 274.0], [36.5, 274.0], [36.6, 274.0], [36.7, 274.0], [36.8, 274.0], [36.9, 274.0], [37.0, 274.0], [37.1, 274.0], [37.2, 274.0], [37.3, 275.0], [37.4, 275.0], [37.5, 275.0], [37.6, 275.0], [37.7, 275.0], [37.8, 275.0], [37.9, 275.0], [38.0, 275.0], [38.1, 276.0], [38.2, 276.0], [38.3, 276.0], [38.4, 276.0], [38.5, 276.0], [38.6, 276.0], [38.7, 276.0], [38.8, 277.0], [38.9, 277.0], [39.0, 277.0], [39.1, 277.0], [39.2, 277.0], [39.3, 277.0], [39.4, 278.0], [39.5, 278.0], [39.6, 278.0], [39.7, 278.0], [39.8, 278.0], [39.9, 278.0], [40.0, 278.0], [40.1, 279.0], [40.2, 279.0], [40.3, 279.0], [40.4, 279.0], [40.5, 279.0], [40.6, 279.0], [40.7, 279.0], [40.8, 280.0], [40.9, 280.0], [41.0, 280.0], [41.1, 280.0], [41.2, 280.0], [41.3, 280.0], [41.4, 280.0], [41.5, 281.0], [41.6, 281.0], [41.7, 281.0], [41.8, 281.0], [41.9, 281.0], [42.0, 281.0], [42.1, 282.0], [42.2, 282.0], [42.3, 282.0], [42.4, 282.0], [42.5, 282.0], [42.6, 282.0], [42.7, 283.0], [42.8, 283.0], [42.9, 283.0], [43.0, 283.0], [43.1, 283.0], [43.2, 283.0], [43.3, 284.0], [43.4, 284.0], [43.5, 284.0], [43.6, 284.0], [43.7, 284.0], [43.8, 284.0], [43.9, 285.0], [44.0, 285.0], [44.1, 285.0], [44.2, 285.0], [44.3, 285.0], [44.4, 285.0], [44.5, 286.0], [44.6, 286.0], [44.7, 286.0], [44.8, 286.0], [44.9, 286.0], [45.0, 287.0], [45.1, 287.0], [45.2, 287.0], [45.3, 287.0], [45.4, 287.0], [45.5, 287.0], [45.6, 288.0], [45.7, 288.0], [45.8, 288.0], [45.9, 288.0], [46.0, 288.0], [46.1, 288.0], [46.2, 289.0], [46.3, 289.0], [46.4, 289.0], [46.5, 289.0], [46.6, 289.0], [46.7, 290.0], [46.8, 290.0], [46.9, 290.0], [47.0, 290.0], [47.1, 290.0], [47.2, 290.0], [47.3, 291.0], [47.4, 291.0], [47.5, 291.0], [47.6, 291.0], [47.7, 291.0], [47.8, 292.0], [47.9, 292.0], [48.0, 292.0], [48.1, 292.0], [48.2, 292.0], [48.3, 293.0], [48.4, 293.0], [48.5, 293.0], [48.6, 293.0], [48.7, 294.0], [48.8, 294.0], [48.9, 294.0], [49.0, 294.0], [49.1, 294.0], [49.2, 295.0], [49.3, 295.0], [49.4, 295.0], [49.5, 295.0], [49.6, 295.0], [49.7, 296.0], [49.8, 296.0], [49.9, 296.0], [50.0, 296.0], [50.1, 297.0], [50.2, 297.0], [50.3, 297.0], [50.4, 297.0], [50.5, 298.0], [50.6, 298.0], [50.7, 298.0], [50.8, 298.0], [50.9, 298.0], [51.0, 299.0], [51.1, 299.0], [51.2, 299.0], [51.3, 299.0], [51.4, 300.0], [51.5, 300.0], [51.6, 300.0], [51.7, 300.0], [51.8, 300.0], [51.9, 301.0], [52.0, 301.0], [52.1, 301.0], [52.2, 301.0], [52.3, 302.0], [52.4, 302.0], [52.5, 302.0], [52.6, 302.0], [52.7, 303.0], [52.8, 303.0], [52.9, 303.0], [53.0, 303.0], [53.1, 303.0], [53.2, 304.0], [53.3, 304.0], [53.4, 304.0], [53.5, 304.0], [53.6, 305.0], [53.7, 305.0], [53.8, 305.0], [53.9, 305.0], [54.0, 305.0], [54.1, 306.0], [54.2, 306.0], [54.3, 306.0], [54.4, 306.0], [54.5, 307.0], [54.6, 307.0], [54.7, 307.0], [54.8, 307.0], [54.9, 308.0], [55.0, 308.0], [55.1, 308.0], [55.2, 308.0], [55.3, 308.0], [55.4, 309.0], [55.5, 309.0], [55.6, 309.0], [55.7, 309.0], [55.8, 310.0], [55.9, 310.0], [56.0, 310.0], [56.1, 310.0], [56.2, 311.0], [56.3, 311.0], [56.4, 311.0], [56.5, 311.0], [56.6, 312.0], [56.7, 312.0], [56.8, 312.0], [56.9, 312.0], [57.0, 312.0], [57.1, 313.0], [57.2, 313.0], [57.3, 313.0], [57.4, 313.0], [57.5, 314.0], [57.6, 314.0], [57.7, 314.0], [57.8, 314.0], [57.9, 315.0], [58.0, 315.0], [58.1, 315.0], [58.2, 315.0], [58.3, 316.0], [58.4, 316.0], [58.5, 316.0], [58.6, 316.0], [58.7, 316.0], [58.8, 317.0], [58.9, 317.0], [59.0, 317.0], [59.1, 317.0], [59.2, 318.0], [59.3, 318.0], [59.4, 318.0], [59.5, 318.0], [59.6, 319.0], [59.7, 319.0], [59.8, 319.0], [59.9, 319.0], [60.0, 319.0], [60.1, 320.0], [60.2, 320.0], [60.3, 320.0], [60.4, 320.0], [60.5, 321.0], [60.6, 321.0], [60.7, 321.0], [60.8, 321.0], [60.9, 322.0], [61.0, 322.0], [61.1, 322.0], [61.2, 322.0], [61.3, 323.0], [61.4, 323.0], [61.5, 323.0], [61.6, 323.0], [61.7, 324.0], [61.8, 324.0], [61.9, 324.0], [62.0, 324.0], [62.1, 324.0], [62.2, 325.0], [62.3, 325.0], [62.4, 325.0], [62.5, 325.0], [62.6, 326.0], [62.7, 326.0], [62.8, 326.0], [62.9, 327.0], [63.0, 327.0], [63.1, 327.0], [63.2, 327.0], [63.3, 328.0], [63.4, 328.0], [63.5, 328.0], [63.6, 328.0], [63.7, 329.0], [63.8, 329.0], [63.9, 329.0], [64.0, 329.0], [64.1, 329.0], [64.2, 330.0], [64.3, 330.0], [64.4, 330.0], [64.5, 330.0], [64.6, 331.0], [64.7, 331.0], [64.8, 331.0], [64.9, 331.0], [65.0, 332.0], [65.1, 332.0], [65.2, 332.0], [65.3, 332.0], [65.4, 333.0], [65.5, 333.0], [65.6, 333.0], [65.7, 333.0], [65.8, 334.0], [65.9, 334.0], [66.0, 334.0], [66.1, 335.0], [66.2, 335.0], [66.3, 335.0], [66.4, 335.0], [66.5, 336.0], [66.6, 336.0], [66.7, 336.0], [66.8, 336.0], [66.9, 337.0], [67.0, 337.0], [67.1, 337.0], [67.2, 338.0], [67.3, 338.0], [67.4, 338.0], [67.5, 339.0], [67.6, 339.0], [67.7, 339.0], [67.8, 340.0], [67.9, 340.0], [68.0, 340.0], [68.1, 340.0], [68.2, 341.0], [68.3, 341.0], [68.4, 341.0], [68.5, 341.0], [68.6, 342.0], [68.7, 342.0], [68.8, 342.0], [68.9, 343.0], [69.0, 343.0], [69.1, 343.0], [69.2, 344.0], [69.3, 344.0], [69.4, 344.0], [69.5, 345.0], [69.6, 345.0], [69.7, 345.0], [69.8, 346.0], [69.9, 346.0], [70.0, 346.0], [70.1, 347.0], [70.2, 347.0], [70.3, 347.0], [70.4, 348.0], [70.5, 348.0], [70.6, 349.0], [70.7, 349.0], [70.8, 349.0], [70.9, 350.0], [71.0, 350.0], [71.1, 350.0], [71.2, 351.0], [71.3, 351.0], [71.4, 352.0], [71.5, 352.0], [71.6, 352.0], [71.7, 353.0], [71.8, 353.0], [71.9, 354.0], [72.0, 354.0], [72.1, 355.0], [72.2, 355.0], [72.3, 355.0], [72.4, 356.0], [72.5, 356.0], [72.6, 357.0], [72.7, 357.0], [72.8, 358.0], [72.9, 358.0], [73.0, 359.0], [73.1, 359.0], [73.2, 360.0], [73.3, 360.0], [73.4, 361.0], [73.5, 361.0], [73.6, 362.0], [73.7, 362.0], [73.8, 363.0], [73.9, 364.0], [74.0, 364.0], [74.1, 365.0], [74.2, 365.0], [74.3, 366.0], [74.4, 366.0], [74.5, 366.0], [74.6, 367.0], [74.7, 367.0], [74.8, 368.0], [74.9, 368.0], [75.0, 369.0], [75.1, 370.0], [75.2, 370.0], [75.3, 370.0], [75.4, 371.0], [75.5, 372.0], [75.6, 372.0], [75.7, 373.0], [75.8, 374.0], [75.9, 374.0], [76.0, 375.0], [76.1, 376.0], [76.2, 376.0], [76.3, 377.0], [76.4, 378.0], [76.5, 378.0], [76.6, 379.0], [76.7, 380.0], [76.8, 380.0], [76.9, 381.0], [77.0, 381.0], [77.1, 382.0], [77.2, 383.0], [77.3, 383.0], [77.4, 384.0], [77.5, 384.0], [77.6, 385.0], [77.7, 386.0], [77.8, 386.0], [77.9, 387.0], [78.0, 388.0], [78.1, 388.0], [78.2, 389.0], [78.3, 390.0], [78.4, 390.0], [78.5, 391.0], [78.6, 392.0], [78.7, 392.0], [78.8, 393.0], [78.9, 394.0], [79.0, 395.0], [79.1, 396.0], [79.2, 396.0], [79.3, 397.0], [79.4, 398.0], [79.5, 399.0], [79.6, 400.0], [79.7, 401.0], [79.8, 401.0], [79.9, 402.0], [80.0, 403.0], [80.1, 404.0], [80.2, 405.0], [80.3, 406.0], [80.4, 407.0], [80.5, 408.0], [80.6, 408.0], [80.7, 410.0], [80.8, 411.0], [80.9, 412.0], [81.0, 412.0], [81.1, 413.0], [81.2, 414.0], [81.3, 416.0], [81.4, 417.0], [81.5, 418.0], [81.6, 419.0], [81.7, 419.0], [81.8, 421.0], [81.9, 422.0], [82.0, 423.0], [82.1, 424.0], [82.2, 425.0], [82.3, 426.0], [82.4, 427.0], [82.5, 428.0], [82.6, 430.0], [82.7, 431.0], [82.8, 432.0], [82.9, 433.0], [83.0, 434.0], [83.1, 436.0], [83.2, 438.0], [83.3, 439.0], [83.4, 441.0], [83.5, 442.0], [83.6, 444.0], [83.7, 445.0], [83.8, 447.0], [83.9, 448.0], [84.0, 450.0], [84.1, 451.0], [84.2, 453.0], [84.3, 454.0], [84.4, 456.0], [84.5, 457.0], [84.6, 459.0], [84.7, 461.0], [84.8, 464.0], [84.9, 466.0], [85.0, 468.0], [85.1, 470.0], [85.2, 472.0], [85.3, 474.0], [85.4, 476.0], [85.5, 479.0], [85.6, 480.0], [85.7, 483.0], [85.8, 485.0], [85.9, 488.0], [86.0, 490.0], [86.1, 493.0], [86.2, 496.0], [86.3, 498.0], [86.4, 501.0], [86.5, 503.0], [86.6, 506.0], [86.7, 509.0], [86.8, 511.0], [86.9, 514.0], [87.0, 516.0], [87.1, 520.0], [87.2, 522.0], [87.3, 525.0], [87.4, 528.0], [87.5, 531.0], [87.6, 534.0], [87.7, 537.0], [87.8, 540.0], [87.9, 543.0], [88.0, 546.0], [88.1, 550.0], [88.2, 554.0], [88.3, 557.0], [88.4, 560.0], [88.5, 565.0], [88.6, 568.0], [88.7, 573.0], [88.8, 576.0], [88.9, 581.0], [89.0, 586.0], [89.1, 590.0], [89.2, 594.0], [89.3, 598.0], [89.4, 603.0], [89.5, 608.0], [89.6, 613.0], [89.7, 618.0], [89.8, 622.0], [89.9, 626.0], [90.0, 631.0], [90.1, 636.0], [90.2, 641.0], [90.3, 647.0], [90.4, 653.0], [90.5, 659.0], [90.6, 665.0], [90.7, 671.0], [90.8, 677.0], [90.9, 684.0], [91.0, 692.0], [91.1, 698.0], [91.2, 705.0], [91.3, 711.0], [91.4, 719.0], [91.5, 728.0], [91.6, 737.0], [91.7, 743.0], [91.8, 751.0], [91.9, 761.0], [92.0, 768.0], [92.1, 778.0], [92.2, 786.0], [92.3, 796.0], [92.4, 807.0], [92.5, 818.0], [92.6, 829.0], [92.7, 841.0], [92.8, 851.0], [92.9, 862.0], [93.0, 870.0], [93.1, 881.0], [93.2, 890.0], [93.3, 900.0], [93.4, 913.0], [93.5, 926.0], [93.6, 940.0], [93.7, 952.0], [93.8, 967.0], [93.9, 984.0], [94.0, 1000.0], [94.1, 1017.0], [94.2, 1036.0], [94.3, 1055.0], [94.4, 1074.0], [94.5, 1093.0], [94.6, 1113.0], [94.7, 1138.0], [94.8, 1166.0], [94.9, 1191.0], [95.0, 1213.0], [95.1, 1232.0], [95.2, 1261.0], [95.3, 1282.0], [95.4, 1311.0], [95.5, 1342.0], [95.6, 1377.0], [95.7, 1410.0], [95.8, 1444.0], [95.9, 1481.0], [96.0, 1514.0], [96.1, 1547.0], [96.2, 1577.0], [96.3, 1614.0], [96.4, 1655.0], [96.5, 1693.0], [96.6, 1736.0], [96.7, 1786.0], [96.8, 1834.0], [96.9, 1892.0], [97.0, 1934.0], [97.1, 1979.0], [97.2, 2022.0], [97.3, 2057.0], [97.4, 2096.0], [97.5, 2144.0], [97.6, 2187.0], [97.7, 2238.0], [97.8, 2306.0], [97.9, 2379.0], [98.0, 2468.0], [98.1, 2573.0], [98.2, 2670.0], [98.3, 2805.0], [98.4, 3063.0], [98.5, 3392.0], [98.6, 3686.0], [98.7, 4020.0], [98.8, 4341.0], [98.9, 4845.0], [99.0, 5367.0], [99.1, 5547.0], [99.2, 5694.0], [99.3, 5870.0], [99.4, 6008.0], [99.5, 6201.0], [99.6, 6611.0], [99.7, 6971.0], [99.8, 7419.0], [99.9, 8799.0], [100.0, 42151.0]], "isOverall": false, "label": "BlazeDemo Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 28657.0, "series": [{"data": [[34300.0, 1.0], [36100.0, 1.0], [41100.0, 1.0], [42100.0, 1.0], [200.0, 28657.0], [300.0, 15728.0], [400.0, 3790.0], [500.0, 1660.0], [600.0, 998.0], [700.0, 679.0], [800.0, 531.0], [900.0, 395.0], [1000.0, 302.0], [1100.0, 225.0], [1200.0, 237.0], [1300.0, 172.0], [1400.0, 164.0], [1500.0, 169.0], [1600.0, 142.0], [1700.0, 121.0], [1800.0, 102.0], [1900.0, 130.0], [2000.0, 139.0], [2100.0, 129.0], [2200.0, 84.0], [2300.0, 77.0], [2400.0, 60.0], [2500.0, 55.0], [2600.0, 47.0], [2700.0, 44.0], [2800.0, 28.0], [2900.0, 25.0], [3000.0, 9.0], [3100.0, 23.0], [3300.0, 15.0], [3200.0, 16.0], [3400.0, 15.0], [3500.0, 22.0], [3700.0, 14.0], [3600.0, 20.0], [3800.0, 21.0], [3900.0, 14.0], [4000.0, 22.0], [4300.0, 15.0], [4200.0, 13.0], [4100.0, 19.0], [4600.0, 7.0], [4400.0, 12.0], [4500.0, 11.0], [4800.0, 10.0], [4700.0, 13.0], [4900.0, 8.0], [5100.0, 5.0], [5000.0, 5.0], [5200.0, 17.0], [5300.0, 25.0], [5400.0, 30.0], [5500.0, 39.0], [5600.0, 38.0], [5800.0, 34.0], [5700.0, 28.0], [5900.0, 44.0], [6000.0, 30.0], [6100.0, 26.0], [6300.0, 14.0], [6200.0, 24.0], [6600.0, 11.0], [6400.0, 7.0], [6500.0, 10.0], [6700.0, 20.0], [6900.0, 10.0], [6800.0, 20.0], [7000.0, 14.0], [7100.0, 12.0], [7200.0, 16.0], [7300.0, 9.0], [7400.0, 9.0], [7500.0, 5.0], [7600.0, 6.0], [7900.0, 2.0], [7800.0, 5.0], [7700.0, 9.0], [8000.0, 2.0], [8100.0, 3.0], [8600.0, 2.0], [8200.0, 3.0], [8300.0, 1.0], [8400.0, 2.0], [8500.0, 3.0], [8700.0, 5.0], [9200.0, 1.0], [9000.0, 1.0], [8900.0, 1.0], [9400.0, 1.0], [10200.0, 1.0], [10000.0, 1.0], [10600.0, 1.0], [11100.0, 2.0], [11200.0, 2.0], [11000.0, 1.0], [11300.0, 2.0], [11500.0, 1.0], [11600.0, 2.0], [12000.0, 3.0], [11800.0, 2.0], [12200.0, 1.0], [12100.0, 1.0], [12900.0, 1.0], [13600.0, 3.0], [13800.0, 1.0], [13900.0, 2.0], [14800.0, 1.0], [15000.0, 1.0], [15600.0, 2.0], [16900.0, 1.0], [17900.0, 1.0], [18700.0, 1.0], [19100.0, 1.0], [19200.0, 1.0], [20800.0, 1.0], [20700.0, 1.0], [22000.0, 1.0], [25100.0, 1.0], [27200.0, 1.0], [26800.0, 1.0], [28100.0, 1.0], [32600.0, 1.0], [31900.0, 1.0], [37200.0, 1.0], [40600.0, 1.0]], "isOverall": false, "label": "BlazeDemo Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 42100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 48198.0, "series": [{"data": [[0.0, 48198.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5339.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2250.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.62921576E12, "maxY": 126.67940199335564, "series": [{"data": [[1.62921594E12, 63.91855203619906], [1.62921576E12, 8.08398950131234], [1.62921624E12, 1.0], [1.62921582E12, 22.72531675830741], [1.6292163E12, 1.0], [1.62921612E12, 122.24571932921455], [1.62921618E12, 126.67940199335564], [1.629216E12, 81.58274782608684], [1.62921606E12, 101.34112312521832], [1.62921588E12, 40.12859884836855], [1.62921636E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62921636E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 296.7201051248356, "minX": 1.0, "maxY": 1907.4172661870498, "series": [{"data": [[2.0, 353.85714285714283], [3.0, 1820.2222222222222], [4.0, 757.5833333333335], [5.0, 879.0740740740742], [6.0, 704.28125], [7.0, 632.1739130434783], [8.0, 515.686274509804], [9.0, 738.487804878049], [10.0, 621.0499999999997], [11.0, 477.1379310344828], [12.0, 386.7924528301886], [13.0, 340.9104477611939], [14.0, 322.2000000000001], [15.0, 309.3963414634146], [16.0, 303.2643678160921], [17.0, 298.9322916666668], [18.0, 313.7037037037038], [19.0, 302.07547169811323], [20.0, 303.68396226415086], [21.0, 343.27], [22.0, 338.27884615384613], [23.0, 344.0909090909092], [24.0, 317.5766129032257], [25.0, 310.8015564202333], [26.0, 359.2489270386266], [27.0, 347.65737051792814], [28.0, 360.9598393574297], [29.0, 340.8252788104089], [30.0, 369.8937007874015], [31.0, 363.9709090909094], [32.0, 350.86206896551744], [33.0, 355.12925170068], [34.0, 340.86912751677846], [35.0, 346.4143302180684], [36.0, 346.41121495327104], [37.0, 365.9850299401198], [38.0, 356.36969696969686], [39.0, 363.9239766081871], [40.0, 351.115511551155], [41.0, 493.685], [42.0, 837.5796178343949], [43.0, 1002.1999999999998], [44.0, 782.9324324324327], [45.0, 681.0173410404626], [46.0, 830.4596273291927], [47.0, 758.3677419354838], [48.0, 817.938888888889], [49.0, 648.1502347417842], [50.0, 551.618556701031], [51.0, 624.0643274853802], [52.0, 787.6645962732919], [53.0, 1151.9933333333336], [54.0, 913.9385474860334], [55.0, 1567.373134328358], [56.0, 827.3899371069183], [57.0, 849.123188405797], [58.0, 728.4295774647887], [59.0, 1907.4172661870498], [60.0, 1377.5414012738859], [61.0, 1665.4177215189873], [62.0, 1366.9065934065936], [63.0, 1193.6666666666667], [64.0, 1121.6842105263163], [65.0, 874.2977099236645], [66.0, 633.4888178913737], [67.0, 650.892857142857], [68.0, 642.6268656716418], [69.0, 593.8419354838711], [70.0, 494.0216346153839], [71.0, 411.5124792013313], [72.0, 351.8049853372436], [73.0, 317.7165697674419], [74.0, 319.276353276353], [75.0, 296.7201051248356], [76.0, 311.09944751381215], [77.0, 317.979536152797], [78.0, 319.21721311475414], [79.0, 330.0666666666672], [80.0, 350.9492957746479], [81.0, 339.6221910112362], [82.0, 343.4625], [83.0, 341.96633941093967], [84.0, 348.24142661179695], [85.0, 345.1307901907352], [86.0, 359.3086592178772], [87.0, 363.56033287101235], [88.0, 377.1626248216835], [89.0, 363.76775956284143], [90.0, 367.6463414634147], [91.0, 366.3594594594597], [92.0, 377.27999999999975], [93.0, 379.2317073170732], [94.0, 382.21610738255], [95.0, 382.6820083682012], [96.0, 387.5485175202157], [97.0, 405.39240506329116], [98.0, 401.2560321715815], [99.0, 395.5697050938338], [100.0, 414.10655737704917], [101.0, 404.5426251691478], [102.0, 418.5846994535519], [103.0, 418.26702997275197], [104.0, 427.57988980716294], [105.0, 430.43265306122436], [106.0, 431.07650273224004], [107.0, 425.4002751031638], [108.0, 443.24861878453044], [109.0, 461.28755364806887], [110.0, 541.7479131886479], [111.0, 497.98211382113834], [112.0, 579.4758620689654], [113.0, 590.5438282647581], [114.0, 584.5697674418607], [115.0, 683.641325536063], [116.0, 699.7174348697388], [117.0, 697.1563786008235], [118.0, 792.4816513761467], [119.0, 762.3208333333337], [120.0, 769.3025210084036], [121.0, 765.5548098433999], [122.0, 825.6469298245612], [123.0, 719.884700665189], [124.0, 581.7733990147785], [125.0, 567.2534992223951], [126.0, 577.2072992700733], [127.0, 602.9813084112152], [128.0, 548.7935393258429], [129.0, 524.112175102599], [130.0, 569.0656205420833], [131.0, 577.7780859916769], [132.0, 562.5533707865171], [133.0, 540.3986206896548], [134.0, 517.9916666666669], [1.0, 480.15492957746466]], "isOverall": false, "label": "BlazeDemo Request", "isController": false}, {"data": [[86.43822258868278, 485.1678467081289]], "isOverall": false, "label": "BlazeDemo Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 134.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 18.9, "minX": 1.62921576E12, "maxY": 1369219.75, "series": [{"data": [[1.62921594E12, 441990.88333333336], [1.62921576E12, 36290.45], [1.62921624E12, 1905.0], [1.62921582E12, 398432.68333333335], [1.6292163E12, 1905.0], [1.62921612E12, 1079183.3666666667], [1.62921618E12, 172021.63333333333], [1.629216E12, 1369219.75], [1.62921606E12, 1365409.0166666666], [1.62921588E12, 446563.61666666664], [1.62921636E12, 857.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.62921594E12, 9746.1], [1.62921576E12, 800.1], [1.62921624E12, 42.0], [1.62921582E12, 8784.3], [1.6292163E12, 42.0], [1.62921612E12, 23793.0], [1.62921618E12, 3792.6], [1.629216E12, 30187.5], [1.62921606E12, 30103.5], [1.62921588E12, 9846.9], [1.62921636E12, 18.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62921636E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 307.9242170690899, "minX": 1.62921576E12, "maxY": 843.0293040293054, "series": [{"data": [[1.62921594E12, 843.0293040293054], [1.62921576E12, 515.8372703412074], [1.62921624E12, 364.45000000000005], [1.62921582E12, 307.9242170690899], [1.6292163E12, 394.70000000000005], [1.62921612E12, 637.1605472197699], [1.62921618E12, 705.7320044296793], [1.629216E12, 341.2296347826106], [1.62921606E12, 419.2022322985685], [1.62921588E12, 477.79142674344155], [1.62921636E12, 709.0]], "isOverall": false, "label": "BlazeDemo Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62921636E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 303.83432942864005, "minX": 1.62921576E12, "maxY": 839.1809954751141, "series": [{"data": [[1.62921594E12, 839.1809954751141], [1.62921576E12, 512.1916010498684], [1.62921624E12, 360.55], [1.62921582E12, 303.83432942864005], [1.6292163E12, 391.34999999999997], [1.62921612E12, 633.1877316857897], [1.62921618E12, 701.8244739756353], [1.629216E12, 337.1940173913052], [1.62921606E12, 415.307289850018], [1.62921588E12, 473.77052676476893], [1.62921636E12, 705.8888888888889]], "isOverall": false, "label": "BlazeDemo Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62921636E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.3218782608695669, "minX": 1.62921576E12, "maxY": 54.0, "series": [{"data": [[1.62921594E12, 0.7323852617970295], [1.62921576E12, 2.2283464566929148], [1.62921624E12, 51.199999999999996], [1.62921582E12, 0.41381783409036516], [1.6292163E12, 54.0], [1.62921612E12, 0.5728155339805833], [1.62921618E12, 1.0033222591362148], [1.629216E12, 0.3218782608695669], [1.62921606E12, 0.40551098709452277], [1.62921588E12, 0.5416933248027305], [1.62921636E12, 50.22222222222222]], "isOverall": false, "label": "BlazeDemo Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62921636E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 219.0, "minX": 1.62921576E12, "maxY": 42151.0, "series": [{"data": [[1.62921594E12, 42151.0], [1.62921576E12, 4637.0], [1.62921624E12, 718.0], [1.62921582E12, 799.0], [1.6292163E12, 882.0], [1.62921612E12, 8799.0], [1.62921618E12, 6155.0], [1.629216E12, 5572.0], [1.62921606E12, 4118.0], [1.62921588E12, 22029.0], [1.62921636E12, 2115.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.62921594E12, 1718.0], [1.62921576E12, 1077.6000000000001], [1.62921624E12, 521.0000000000001], [1.62921582E12, 433.0], [1.6292163E12, 608.4000000000001], [1.62921612E12, 1092.0], [1.62921618E12, 703.0], [1.629216E12, 463.0], [1.62921606E12, 702.0], [1.62921588E12, 572.0], [1.62921636E12, 2115.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.62921594E12, 9805.840000000098], [1.62921576E12, 3175.8000000000075], [1.62921624E12, 718.0], [1.62921582E12, 604.4799999999996], [1.6292163E12, 882.0], [1.62921612E12, 6839.0700000000015], [1.62921618E12, 5919.160000000001], [1.629216E12, 961.7199999999993], [1.62921606E12, 2268.279999999999], [1.62921588E12, 3667.779999999968], [1.62921636E12, 2115.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.62921594E12, 2761.0], [1.62921576E12, 1723.2999999999984], [1.62921624E12, 708.3499999999999], [1.62921582E12, 492.7999999999997], [1.6292163E12, 868.3999999999999], [1.62921612E12, 2265.0], [1.62921618E12, 5510.199999999999], [1.629216E12, 609.1999999999989], [1.62921606E12, 1096.0], [1.62921588E12, 1400.0], [1.62921636E12, 2115.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.62921594E12, 219.0], [1.62921576E12, 229.0], [1.62921624E12, 280.0], [1.62921582E12, 223.0], [1.6292163E12, 295.0], [1.62921612E12, 221.0], [1.62921618E12, 222.0], [1.629216E12, 220.0], [1.62921606E12, 221.0], [1.62921588E12, 222.0], [1.62921636E12, 298.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.62921594E12, 309.0], [1.62921576E12, 302.0], [1.62921624E12, 307.0], [1.62921582E12, 273.0], [1.6292163E12, 336.0], [1.62921612E12, 297.0], [1.62921618E12, 299.0], [1.629216E12, 297.0], [1.62921606E12, 295.0], [1.62921588E12, 309.0], [1.62921636E12, 526.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62921636E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 251.5, "minX": 1.0, "maxY": 5492.0, "series": [{"data": [[2.0, 495.0], [3.0, 286.0], [4.0, 5492.0], [5.0, 423.5], [6.0, 352.0], [7.0, 485.0], [8.0, 313.0], [9.0, 438.0], [10.0, 5327.0], [11.0, 404.0], [12.0, 338.0], [13.0, 3692.5], [14.0, 4042.5], [15.0, 299.0], [16.0, 337.0], [17.0, 302.0], [19.0, 273.0], [22.0, 270.5], [24.0, 255.0], [32.0, 272.5], [34.0, 326.5], [35.0, 292.0], [37.0, 301.0], [39.0, 328.0], [38.0, 394.0], [41.0, 310.0], [43.0, 295.0], [42.0, 337.0], [45.0, 313.5], [44.0, 387.0], [46.0, 293.0], [47.0, 312.0], [49.0, 309.0], [48.0, 345.5], [51.0, 279.0], [50.0, 326.0], [53.0, 303.0], [52.0, 303.0], [54.0, 289.0], [55.0, 361.0], [57.0, 271.5], [56.0, 335.0], [58.0, 269.5], [60.0, 251.5], [61.0, 277.0], [63.0, 282.0], [62.0, 272.5], [67.0, 279.0], [66.0, 269.0], [64.0, 344.0], [65.0, 331.0], [70.0, 256.5], [71.0, 272.0], [69.0, 287.0], [68.0, 292.0], [73.0, 253.0], [72.0, 268.5], [75.0, 305.0], [74.0, 302.0], [79.0, 299.0], [78.0, 315.0], [81.0, 275.0], [83.0, 284.0], [82.0, 259.0], [80.0, 294.5], [86.0, 288.0], [84.0, 312.0], [85.0, 351.0], [89.0, 267.0], [91.0, 295.5], [88.0, 312.5], [90.0, 334.0], [94.0, 302.5], [93.0, 317.5], [92.0, 331.0], [99.0, 304.0], [98.0, 297.0], [96.0, 315.5], [101.0, 306.5], [100.0, 317.0], [105.0, 317.0], [106.0, 304.5], [109.0, 306.0], [108.0, 325.0], [110.0, 326.5], [111.0, 334.0], [115.0, 303.5], [114.0, 310.5], [113.0, 298.0], [112.0, 317.0], [116.0, 335.5], [121.0, 345.0], [120.0, 302.0], [124.0, 289.5], [128.0, 299.5], [136.0, 292.0], [139.0, 321.0], [137.0, 339.0], [146.0, 309.0], [150.0, 321.5], [153.0, 312.5], [154.0, 309.5], [156.0, 303.0], [161.0, 320.0], [165.0, 310.0], [162.0, 314.0], [160.0, 320.0], [163.0, 294.0], [168.0, 312.0], [170.0, 303.0], [171.0, 303.0], [179.0, 259.0], [183.0, 298.0], [178.0, 304.0], [176.0, 309.0], [191.0, 274.5], [189.0, 297.0], [184.0, 306.0], [185.0, 320.0], [193.0, 300.0], [192.0, 292.0], [200.0, 298.0], [202.0, 301.0], [204.0, 281.0], [211.0, 292.0], [209.0, 329.0], [210.0, 319.0], [208.0, 301.5], [214.0, 306.0], [215.0, 293.0], [223.0, 288.5], [221.0, 285.0], [216.0, 292.0], [219.0, 296.0], [222.0, 276.0], [220.0, 283.0], [225.0, 300.0], [224.0, 305.0], [229.0, 298.0], [231.0, 285.0], [228.0, 293.0], [230.0, 286.0], [226.0, 320.0], [227.0, 281.0], [233.0, 309.0], [235.0, 287.0], [237.0, 297.0], [239.0, 291.0], [238.0, 295.5], [234.0, 302.0], [236.0, 293.0], [232.0, 294.5], [244.0, 292.5], [246.0, 298.0], [240.0, 299.0], [247.0, 297.5], [243.0, 285.0], [241.0, 298.0], [245.0, 297.0], [253.0, 293.5], [249.0, 290.0], [248.0, 286.0], [251.0, 297.0], [254.0, 300.5], [252.0, 300.0], [255.0, 287.0], [250.0, 310.0], [258.0, 277.0], [259.0, 280.0], [257.0, 288.0], [262.0, 294.0], [263.0, 307.0], [265.0, 324.0], [1.0, 312.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[50.0, 869.0], [52.0, 969.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 265.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 248.0, "minX": 1.0, "maxY": 5489.5, "series": [{"data": [[2.0, 492.0], [3.0, 283.0], [4.0, 5489.5], [5.0, 421.0], [6.0, 350.5], [7.0, 483.0], [8.0, 309.5], [9.0, 433.0], [10.0, 5323.0], [11.0, 400.0], [12.0, 334.5], [13.0, 3688.5], [14.0, 4039.5], [15.0, 296.0], [16.0, 333.5], [17.0, 298.0], [19.0, 268.0], [22.0, 266.5], [24.0, 250.5], [32.0, 270.5], [34.0, 324.0], [35.0, 286.0], [37.0, 297.0], [39.0, 323.0], [38.0, 389.5], [41.0, 306.0], [43.0, 292.0], [42.0, 333.0], [45.0, 311.0], [44.0, 383.5], [46.0, 289.5], [47.0, 309.0], [49.0, 306.0], [48.0, 340.0], [51.0, 275.5], [50.0, 323.0], [53.0, 298.5], [52.0, 299.0], [54.0, 285.0], [55.0, 357.0], [57.0, 266.5], [56.0, 329.5], [58.0, 267.5], [60.0, 248.5], [61.0, 272.0], [63.0, 277.0], [62.0, 268.0], [67.0, 274.5], [66.0, 264.5], [64.0, 341.0], [65.0, 326.5], [70.0, 251.5], [71.0, 267.5], [69.0, 281.0], [68.0, 287.5], [73.0, 248.0], [72.0, 267.5], [75.0, 301.0], [74.0, 297.5], [79.0, 295.0], [78.0, 310.5], [81.0, 272.0], [83.0, 280.0], [82.0, 255.0], [80.0, 288.5], [86.0, 283.5], [84.0, 308.0], [85.0, 348.0], [89.0, 263.0], [91.0, 292.0], [88.0, 308.5], [90.0, 330.5], [94.0, 299.0], [93.0, 314.0], [92.0, 327.5], [99.0, 302.0], [98.0, 293.5], [96.0, 312.0], [101.0, 301.0], [100.0, 311.5], [105.0, 314.5], [106.0, 300.5], [109.0, 302.5], [108.0, 319.5], [110.0, 322.5], [111.0, 330.0], [115.0, 299.0], [114.0, 307.0], [113.0, 296.0], [112.0, 314.0], [116.0, 331.5], [121.0, 341.0], [120.0, 298.0], [124.0, 285.5], [128.0, 296.5], [136.0, 288.0], [139.0, 318.0], [137.0, 335.0], [146.0, 305.0], [150.0, 317.0], [153.0, 308.0], [154.0, 304.5], [156.0, 298.5], [161.0, 316.0], [165.0, 305.0], [162.0, 310.0], [160.0, 316.0], [163.0, 291.5], [168.0, 309.0], [170.0, 298.0], [171.0, 299.0], [179.0, 256.0], [183.0, 296.0], [178.0, 300.0], [176.0, 303.5], [191.0, 270.5], [189.0, 294.0], [184.0, 301.5], [185.0, 319.0], [193.0, 297.5], [192.0, 290.0], [200.0, 294.5], [202.0, 296.0], [204.0, 277.0], [211.0, 287.0], [209.0, 325.0], [210.0, 314.0], [208.0, 298.5], [214.0, 302.5], [215.0, 289.0], [223.0, 285.0], [221.0, 280.0], [216.0, 290.5], [219.0, 292.0], [222.0, 272.0], [220.0, 279.0], [225.0, 296.0], [224.0, 300.0], [229.0, 294.0], [231.0, 281.0], [228.0, 288.0], [230.0, 282.0], [226.0, 314.5], [227.0, 278.0], [233.0, 305.0], [235.0, 283.0], [237.0, 293.0], [239.0, 287.0], [238.0, 290.5], [234.0, 298.5], [236.0, 289.0], [232.0, 291.0], [244.0, 288.0], [246.0, 294.0], [240.0, 295.0], [247.0, 294.0], [243.0, 281.0], [241.0, 294.0], [245.0, 292.0], [253.0, 289.5], [249.0, 287.0], [248.0, 281.5], [251.0, 294.0], [254.0, 297.0], [252.0, 295.0], [255.0, 284.0], [250.0, 305.5], [258.0, 272.0], [259.0, 275.0], [257.0, 284.0], [262.0, 290.5], [263.0, 303.0], [265.0, 319.0], [1.0, 309.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[50.0, 869.0], [52.0, 969.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 265.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.62921576E12, "maxY": 239.91666666666666, "series": [{"data": [[1.62921594E12, 77.68333333333334], [1.62921576E12, 6.55], [1.62921624E12, 0.3333333333333333], [1.62921582E12, 70.05], [1.6292163E12, 0.3333333333333333], [1.62921612E12, 189.16666666666666], [1.62921618E12, 27.916666666666668], [1.629216E12, 239.91666666666666], [1.62921606E12, 239.25], [1.62921588E12, 78.48333333333333], [1.62921636E12, 0.13333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62921636E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62921576E12, "maxY": 239.58333333333334, "series": [{"data": [[1.62921594E12, 77.33333333333333], [1.62921576E12, 6.35], [1.62921624E12, 0.3333333333333333], [1.62921582E12, 69.71666666666667], [1.6292163E12, 0.3333333333333333], [1.62921612E12, 188.83333333333334], [1.62921618E12, 30.1], [1.629216E12, 239.58333333333334], [1.62921606E12, 238.91666666666666], [1.62921588E12, 78.13333333333334], [1.62921636E12, 0.15]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.62921594E12, 0.016666666666666666], [1.62921588E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62921636E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62921576E12, "maxY": 239.58333333333334, "series": [{"data": [[1.62921594E12, 0.016666666666666666], [1.62921588E12, 0.016666666666666666]], "isOverall": false, "label": "BlazeDemo Request-failure", "isController": false}, {"data": [[1.62921594E12, 77.33333333333333], [1.62921576E12, 6.35], [1.62921624E12, 0.3333333333333333], [1.62921582E12, 69.71666666666667], [1.6292163E12, 0.3333333333333333], [1.62921612E12, 188.83333333333334], [1.62921618E12, 30.1], [1.629216E12, 239.58333333333334], [1.62921606E12, 238.91666666666666], [1.62921588E12, 78.13333333333334], [1.62921636E12, 0.15]], "isOverall": false, "label": "BlazeDemo Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62921636E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.62921576E12, "maxY": 239.58333333333334, "series": [{"data": [[1.62921594E12, 77.33333333333333], [1.62921576E12, 6.35], [1.62921624E12, 0.3333333333333333], [1.62921582E12, 69.71666666666667], [1.6292163E12, 0.3333333333333333], [1.62921612E12, 188.83333333333334], [1.62921618E12, 30.1], [1.629216E12, 239.58333333333334], [1.62921606E12, 238.91666666666666], [1.62921588E12, 78.13333333333334], [1.62921636E12, 0.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.62921594E12, 0.016666666666666666], [1.62921588E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62921636E12, "title": "Total Transactions Per Second"}},
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


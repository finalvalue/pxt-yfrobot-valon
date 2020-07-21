/**
 * YFRobot valon extension for Microbit
 * 
 * http://www.yfrobot.com/wiki/index.php?title=Valon-I
 * http://www.yfrobot.com
 * 
 * @author [email](yfrobot@qq.com)
 */


// enum ValonPingUnit {
//     //% block="cm"
//     Centimeters,
// }

/**
  * Pre-Defined LED colours
  */
// enum ValonEyesColors {
//     //% block=red
//     Red = 0xff0000,
//     //% block=orange
//     Orange = 0xffa500,
//     //% block=yellow
//     Yellow = 0xffff00,
//     //% block=green
//     Green = 0x00ff00,
//     //% block=blue
//     Blue = 0x0000ff,
//     //% block=indigo
//     Indigo = 0x4b0082,
//     //% block=violet
//     Violet = 0x8a2be2,
//     //% block=purple
//     Purple = 0xff00ff,
//     //% block=white
//     White = 0xffffff,
//     //% block=black
//     Black = 0x000000
// }

/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
// enum ValonEyesMode {
//     //% block="GRB"
//     RGB = 1,
//     //% block="RGB"
//     RGB_RGB = 3,
//     //% block="RGB+W"
//     RGBW = 2
// }

// enum state {
//     state1 = 0x10,
//     state2 = 0x11,
//     state3 = 0x20,
//     state4 = 0x21,
//     state5 = 0x30,
//     state6 = 0x31
// }
// interface KV {
//     key: state;
//     action: Action;
// }

// Motor
enum ValonMotors {
    //% block="left"
    ML = 0,
    //% block="right"
    MR = 1,
    //% block="all"
    MAll = 2
}

// motor dir
enum ValonDir {
    //% block="forward"
    CW = 0,
    //% block="backward"
    CCW = 1
}

enum ValonLED {
    //% block="left"
    LEDLeft = 10,
    //% block="right"
    LEDRight = 9
}

enum ValonLEDswitch {
    //% block="on"
    TurnOn = 0x01,
    //% blockId="LEDturnOff" block="off"
    TurnOff = 0x00
}

// enum ValonRGBEYES {
//     //% block="left"
//     EyesLeft = 1,
//     //% block="right"
//     EyesRight = 0,
//     //% block="all"
//     EyesAll = 2
// }

// Patrol
// enum ValonPatrol {
//     //% block="left"
//     PatrolLeft = 1,
//     //% block="middle"
//     PatrolMiddle = 2,
//     //% block="right"
//     PatrolRight = 8
// }

// enum ValonVoltage {
//     //% block="high"
//     High = 0x01,
//     //% block="low"
//     Low = 0x00
// }

// enum ValonExPin {
//     //% block="expin1"
//     ExPin1 = DigitalPin.P3,
//     //% block="expin2"
//     ExPin2 = DigitalPin.P4
// }

// enum IrButton {
//     //IR HANDLE
//     //% block="up"
//     UP = 0x11,
//     //% block="down"
//     DOWN = 0x91,
//     //% block="left"
//     LEFT = 0x81,
//     //% block="right"
//     RIGHT = 0xa1,
//     //% block="m1"
//     M1 = 0xe9,
//     //% block="m2"
//     M2 = 0x69,
//     //% block="a"
//     A = 0x21,
//     //% block="b"
//     B = 0x01,
//     //% block="any"
//     Any = -1,
//     // MINI IR 
//     //% block="power"
//     Power = 0xa2,
//     //% block="menu"
//     MENU = 0xe2,
//     //% block="test"
//     TEST = 0x22,
//     //% block="+"
//     PLUS = 0x02,
//     //% block="back"
//     Back = 0xc2,
//     //% block="<<"
//     Back2 = 0xe0,
//     //% block="play"
//     Play = 0xa8,
//     //% block=">>"
//     F = 0x90,
//     //% block="0"
//     Number_0 = 0x68,
//     //% block="-"
//     Less = 0x98,
//     //% block="c"
//     C = 0xb0,
//     //% block="1"
//     Number_1 = 0x30,
//     //% block="2"
//     Number_2 = 0x18,
//     //% block="3"
//     Number_3 = 0x7a,
//     //% block="4"
//     Number_4 = 0x10,
//     //% block="5"
//     Number_5 = 0x38,
//     //% block="6"
//     Number_6 = 0x5a,
//     //% block="7"
//     Number_7 = 0x42,
//     //% block="8"
//     Number_8 = 0x4a,
//     //% block="9"
//     Number_9 = 0x52,
// }

// enum IrButtonAction {
//     //% block="pressed"
//     Pressed = 0,
//     //% block="released"
//     Released = 1,
// }

// enum IrProtocol {
//     //% block="Keyestudio"
//     Keyestudio = 0,
//     //% block="NEC"
//     NEC = 1,
// }

//% color="#7BD239" weight=10 icon="\uf1b0" block="valon"
namespace valon {
    // motor pin 
    let valonMotorLD = DigitalPin.P13;
    let valonMotorLA = AnalogPin.P14;
    let valonMotorRD = DigitalPin.P15;
    let valonMotorRA = AnalogPin.P16;
    // ultrasonic pin
    let valonUltrasonicTrig = DigitalPin.P5;
    let valonUltrasonicEcho = DigitalPin.P11;
    // patrol pin
    let valonPatrolLeft = DigitalPin.P1;
    let valonPatrolMiddle = DigitalPin.P2;
    let valonPatrolRight = DigitalPin.P8;

    //
    let valonEyesPin = DigitalPin.P11;

    // IR
    // let irState: IrState;

    const MICROBIT_MAKERBIT_IR_NEC = 777;
    const MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID = 789;
    const MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID = 790;
    const IR_REPEAT = 256;
    const IR_INCOMPLETE = 257;

    // interface IrState {
    //     protocol: IrProtocol;
    //     command: number;
    //     hasNewCommand: boolean;
    //     bitsReceived: uint8;
    //     commandBits: uint8;
    // }

    let initialized = false
    // let neoStrip: valon.Strip;
    let distanceBuf = 0;

    function clamp(value: number, min: number, max: number): number {
        return Math.max(Math.min(max, value), min);
    }

    /**
     * Turn on/off the LEDs.
     */

    //% weight=100
    //% blockId=writeLED block="LEDlight |%ledn turn |%ledswitch"
    //% ledn.fieldEditor="gridpicker" ledn.fieldOptions.columns=2 
    //% ledswitch.fieldEditor="gridpicker" ledswitch.fieldOptions.columns=2
    export function writeLED(ledn: ValonLED, ledswitch: ValonLEDswitch): void {
        led.enable(false);
        if (ledn == ValonLED.LEDLeft) {
            pins.digitalWritePin(DigitalPin.P10, ledswitch)
        } else if (ledn == ValonLED.LEDRight) {
            pins.digitalWritePin(DigitalPin.P9, ledswitch)
        } else {
            return
        }
    }

    /**
      * drive the motor in direction at speed
      * @param motor motor left/right/all
      * @param direction direction to turn
      * @param speed speed of motors (0 to 255). eg: 120
      */
    //% blockId=valon_motor_run block="Motor|%motor dir|%direction speed|%speed"
    //% weight=85
    //% speed.min=0 speed.max=255
    //% motor.fieldEditor="gridpicker" motor.fieldOptions.columns=2
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    export function motorRun(motor: ValonMotors, direction: ValonDir, speed: number): void {
        if (motor > 2 || motor < 0)
            return

        speed = clamp(speed, 0, 255) * 4.01;  // 0~255 > 0~1023

        if (motor == ValonMotors.ML) {
            pins.digitalWritePin(valonMotorLD, direction);
            pins.analogWritePin(valonMotorLA, speed);
        } else if (motor == ValonMotors.MR) {
            pins.digitalWritePin(valonMotorRD, direction);
            pins.analogWritePin(valonMotorRA, speed);
        } else if (motor == ValonMotors.MAll) {
            pins.digitalWritePin(valonMotorRD, direction);
            pins.analogWritePin(valonMotorRA, speed);
            pins.digitalWritePin(valonMotorLD, direction);
            pins.analogWritePin(valonMotorLA, speed);
        }
    }

    /**
     * stop the motor
     */
    //% blockId=valon_stop_motor block="Motor |%motor Stop"
    //% weight=80
    export function motorStop(motor: ValonMotors): void {
        motorRun(motor, 0, 0);
    }

    // /**
    //  * Read ultrasonic sensor.
    //  */
    // //% blockId=valon_ultrasonic_sensor block="read ultrasonic sensor |%unit "
    // //% weight=80
    // export function Ultrasonic(unit: ValonPingUnit, maxCmDistance = 500): number {
    //     let d
    //     // send pulse
    //     pins.setPull(valonUltrasonicTrig, PinPullMode.PullNone);
    //     pins.digitalWritePin(valonUltrasonicTrig, 0);
    //     control.waitMicros(2);
    //     pins.digitalWritePin(valonUltrasonicTrig, 1);
    //     control.waitMicros(10);
    //     pins.digitalWritePin(valonUltrasonicTrig, 0);

    //     // read pulse
    //     // d = pins.pulseIn(valonUltrasonicEcho, PulseValue.High, maxCmDistance * 58);  // 8 / 340 = 
    //     d = pins.pulseIn(valonUltrasonicEcho, PulseValue.High, 25000);
    //     let ret = d;
    //     // filter timeout spikes
    //     if (ret == 0 && distanceBuf != 0) {
    //         ret = distanceBuf;
    //     }
    //     distanceBuf = d;

    //     return Math.floor(ret * 9 / 6 / 58);
    //     // switch (unit) {
    //     //     case ValonPingUnit.Centimeters: return Math.idiv(d, 58);
    //     //     default: return d;
    //     // }

    // }

    // /**
    //   * enable line tracking sensor.
    //   */
    // function enablePatrol(enable: number): void {
    //     pins.digitalWritePin(DigitalPin.P12, enable);
    // }

    // /**
    //   * Read line tracking sensor.
    //   */
    // //% weight=70
    // //% blockId=valon_read_Patrol block="read %patrol line tracking sensor"
    // //% patrol.fieldEditor="gridpicker" patrol.fieldOptions.columns=2 
    // export function readPatrol(patrol: ValonPatrol): number {
    //     enablePatrol(1);
    //     if (patrol == ValonPatrol.PatrolLeft) {
    //         return pins.digitalReadPin(valonPatrolLeft)
    //     } else if (patrol == ValonPatrol.PatrolMiddle) {
    //         return pins.digitalReadPin(valonPatrolMiddle)
    //     } else if (patrol == ValonPatrol.PatrolRight) {
    //         return pins.digitalReadPin(valonPatrolRight)
    //     } else {
    //         return -1
    //     }
    // }

    // /**
    //  * A NeoPixel strip
    //  */
    // export class Strip {
    //     buf: Buffer;
    //     pin: DigitalPin;
    //     // TODO: encode as bytes instead of 32bit
    //     brightness: number;
    //     start: number; // start offset in LED strip
    //     _length: number; // number of LEDs
    //     _mode: ValonEyesMode;
    //     _matrixWidth: number; // number of leds in a matrix - if any

    //     /**
    //      * Set LED to a given color (range 0-255 for r, g, b).
    //      * @param eyes_n position of the NeoPixel in the strip
    //      * @param rgb RGB color of the LED. eg: ValonEyesColors.red
    //      */
    //     //% blockId="valon_eyes_set_eyes_color" block="%eyes|show color at %eyes_n|to %rgb"
    //     //% strip.defl=eyes
    //     //% weight=60
    //     setEyesColor(eyes_n: ValonRGBEYES, rgb: ValonEyesColors): void {
    //         if (eyes_n == ValonRGBEYES.EyesAll) {
    //             this.setPixelRGB(ValonRGBEYES.EyesLeft, rgb >> 0);
    //             this.setPixelRGB(ValonRGBEYES.EyesRight, rgb >> 0);
    //         } else {
    //             this.setPixelRGB(eyes_n, rgb >> 0);
    //         }
    //         this.show();
    //     }

    //     /**
    //      * Set the brightness of the strip. This flag only applies to future operation.
    //      * @param brightness a measure of LED brightness in 0-255. eg: 255
    //      */
    //     //% blockId="valon_eyes_set_brightness" block="%eyes|set brightness %brightness" 
    //     //% strip.defl=eyes
    //     //% weight=58
    //     setBrightness(brightness: number): void {
    //         this.brightness = brightness & 0xff;
    //     }

    //     /**
    //      * Turn off all LEDs.
    //      * You need to call ``show`` to make the changes visible.
    //      */
    //     //% blockId="valon_eyes_clear" block="%eyes|clear"
    //     //% strip.defl=eyes
    //     //% weight=55
    //     clear(): void {
    //         const stride = this._mode === ValonEyesMode.RGBW ? 4 : 3;
    //         this.buf.fill(0, this.start * stride, this._length * stride);
    //     }

    //     /**
    //      * Send all the changes to the strip.
    //      */
    //     //% blockId="valon_eyes_show" block="%strip |show" 
    //     //% strip.defl=strip
    //     //% weight=35
    //     show() {
    //         // only supported in beta
    //         // ws2812b.setBufferMode(this.pin, this._mode);
    //         ws2812b.sendBuffer(this.buf, this.pin);
    //     }

    //     /**
    //      * Set the pin where the neopixel is connected, defaults to P11.
    //      */
    //     setPin(pin: DigitalPin): void {
    //         this.pin = pin;
    //         pins.digitalWritePin(this.pin, 11);
    //         // don't yield to avoid races on initialization
    //     }

    //     private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
    //         if (this._mode === ValonEyesMode.RGB_RGB) {
    //             this.buf[offset + 0] = red;
    //             this.buf[offset + 1] = green;
    //         } else {
    //             this.buf[offset + 0] = green;
    //             this.buf[offset + 1] = red;
    //         }
    //         this.buf[offset + 2] = blue;
    //     }

    //     private setAllRGB(rgb: number) {
    //         let red = unpackR(rgb);
    //         let green = unpackG(rgb);
    //         let blue = unpackB(rgb);

    //         const br = this.brightness;
    //         if (br < 255) {
    //             red = (red * br) >> 8;
    //             green = (green * br) >> 8;
    //             blue = (blue * br) >> 8;
    //         }
    //         const end = this.start + this._length;
    //         const stride = this._mode === ValonEyesMode.RGBW ? 4 : 3;
    //         for (let i = this.start; i < end; ++i) {
    //             this.setBufferRGB(i * stride, red, green, blue)
    //         }
    //     }
    //     private setPixelRGB(pixeloffset: number, rgb: number): void {
    //         if (pixeloffset < 0
    //             || pixeloffset >= this._length)
    //             return;

    //         let stride = this._mode === ValonEyesMode.RGBW ? 4 : 3;
    //         pixeloffset = (pixeloffset + this.start) * stride;

    //         let red = unpackR(rgb);
    //         let green = unpackG(rgb);
    //         let blue = unpackB(rgb);

    //         let br = this.brightness;
    //         if (br < 255) {
    //             red = (red * br) >> 8;
    //             green = (green * br) >> 8;
    //             blue = (blue * br) >> 8;
    //         }
    //         this.setBufferRGB(pixeloffset, red, green, blue)
    //     }
    // }
    // /**
    //  * Create a new NeoPixel driver for eye's LEDs.
    //  * @param numleds number of leds in the eyes, eg: 2
    //  */
    // //% blockId="valon_eyes_create" block="RGBEyes init %numleds|leds as %mode"
    // //% weight=62  
    // //% blockSetVariable=eyes
    // export function create(numleds: number, mode: ValonEyesMode): Strip {
    //     let eyes = new Strip();
    //     let stride = mode === ValonEyesMode.RGBW ? 4 : 3;
    //     eyes.buf = pins.createBuffer(numleds * stride);
    //     eyes.start = 0;
    //     eyes._length = numleds;
    //     eyes._mode = mode || ValonEyesMode.RGB;
    //     eyes._matrixWidth = 0;
    //     eyes.setBrightness(128)
    //     eyes.setPin(valonEyesPin)
    //     return eyes;
    // }

    // /**
    //  * Gets the RGB value of a known color
    //  */
    // //% weight=30  
    // //% blockId="valon_eyes_colors" block="%color"
    // //% advanced=true
    // export function colors(color: ValonEyesColors): number {
    //     return color;
    // }

    // /**
    //  * Converts red, green, blue channels into a RGB color
    //  * @param red value of the red channel between 0 and 255. eg: 255
    //  * @param green value of the green channel between 0 and 255. eg: 255
    //  * @param blue value of the blue channel between 0 and 255. eg: 255
    //  */
    // //% weight=26
    // //% blockId="valon_eyes_rgb" block="red %red|green %green|blue %blue"
    // //% advanced=true
    // export function rgb(red: number, green: number, blue: number): number {
    //     return packRGB(red, green, blue);
    // }

    // function packRGB(a: number, b: number, c: number): number {
    //     return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    // }
    // function unpackR(rgb: number): number {
    //     let r = (rgb >> 16) & 0xFF;
    //     return r;
    // }
    // function unpackG(rgb: number): number {
    //     let g = (rgb >> 8) & 0xFF;
    //     return g;
    // }
    // function unpackB(rgb: number): number {
    //     let b = (rgb) & 0xFF;
    //     return b;
    // }

    // /**
    //  * Converts a hue saturation luminosity value into a RGB color
    //  * @param h hue from 0 to 360. eg: 100
    //  * @param s saturation from 0 to 99. eg: 50
    //  * @param l luminosity from 0 to 99. eg: 50
    //  */
    // //% blockId=neopixelHSL block="hue %h|saturation %s|luminosity %l"
    // //% advanced=true
    // //% weight=20
    // export function hsl(h: number, s: number, l: number): number {
    //     h = Math.round(h);
    //     s = Math.round(s);
    //     l = Math.round(l);

    //     h = h % 360;
    //     s = Math.clamp(0, 99, s);
    //     l = Math.clamp(0, 99, l);
    //     let c = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]
    //     let h1 = Math.idiv(h, 60);//[0,6]
    //     let h2 = Math.idiv((h - h1 * 60) * 256, 60);//[0,255]
    //     let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
    //     let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
    //     let r$: number;
    //     let g$: number;
    //     let b$: number;
    //     if (h1 == 0) {
    //         r$ = c; g$ = x; b$ = 0;
    //     } else if (h1 == 1) {
    //         r$ = x; g$ = c; b$ = 0;
    //     } else if (h1 == 2) {
    //         r$ = 0; g$ = c; b$ = x;
    //     } else if (h1 == 3) {
    //         r$ = 0; g$ = x; b$ = c;
    //     } else if (h1 == 4) {
    //         r$ = x; g$ = 0; b$ = c;
    //     } else if (h1 == 5) {
    //         r$ = c; g$ = 0; b$ = x;
    //     }
    //     let m = Math.idiv((Math.idiv((l * 2 << 8), 100) - c), 2);
    //     let r = r$ + m;
    //     let g = g$ + m;
    //     let b = b$ + m;
    //     return packRGB(r, g, b);
    // }

    // export enum HueInterpolationDirection {
    //     Clockwise,
    //     CounterClockwise,
    //     Shortest
    // }


    // //  IR 
    // function pushBit(bit: number): number {
    //     irState.bitsReceived += 1;
    //     if (irState.bitsReceived <= 8) {
    //         // ignore all address bits
    //         if (irState.protocol === IrProtocol.Keyestudio && bit === 1) {
    //             // recover from missing message bits at the beginning
    //             // Keyestudio address is 0 and thus missing bits can be easily detected
    //             // by checking for the first inverse address bit (which is a 1)
    //             irState.bitsReceived = 9;
    //         }
    //         return IR_INCOMPLETE;
    //     }
    //     if (irState.bitsReceived <= 16) {
    //         // ignore all inverse address bits
    //         return IR_INCOMPLETE;
    //     } else if (irState.bitsReceived < 24) {
    //         irState.commandBits = (irState.commandBits << 1) + bit;
    //         return IR_INCOMPLETE;
    //     } else if (irState.bitsReceived === 24) {
    //         irState.commandBits = (irState.commandBits << 1) + bit;
    //         return irState.commandBits & 0xff;
    //     } else {
    //         // ignore all inverse command bits
    //         return IR_INCOMPLETE;
    //     }
    // }

    // function detectCommand(markAndSpace: number): number {
    //     if (markAndSpace < 1600) {
    //         // low bit
    //         return pushBit(0);
    //     } else if (markAndSpace < 2700) {
    //         // high bit
    //         return pushBit(1);
    //     }

    //     irState.bitsReceived = 0;

    //     if (markAndSpace < 12500) {
    //         // Repeat detected
    //         return IR_REPEAT;
    //     } else if (markAndSpace < 14500) {
    //         // Start detected
    //         return IR_INCOMPLETE;
    //     } else {
    //         return IR_INCOMPLETE;
    //     }
    // }

    // function enableIrMarkSpaceDetection(pin: DigitalPin) {
    //     pins.setPull(pin, PinPullMode.PullNone);

    //     let mark = 0;
    //     let space = 0;

    //     pins.onPulsed(pin, PulseValue.Low, () => {
    //         // HIGH, see https://github.com/microsoft/pxt-microbit/issues/1416
    //         mark = pins.pulseDuration();
    //     });

    //     pins.onPulsed(pin, PulseValue.High, () => {
    //         // LOW
    //         space = pins.pulseDuration();
    //         const command = detectCommand(mark + space);
    //         if (command !== IR_INCOMPLETE) {
    //             control.raiseEvent(MICROBIT_MAKERBIT_IR_NEC, command);
    //         }
    //     });
    // }

    // /**
    //  * Connects to the IR receiver module at the specified pin and configures the IR protocol.
    //  * @param pin IR receiver pin. eg: DigtialPin.P3
    //  * @param protocol IR protocol. eg: valon.IrProtocol.NEC
    //  */
    // //% subcategory="IR Receiver"
    // //% blockId="makerbit_infrared_connect_receiver"
    // //% block="connect IR receiver at pin %pin and decode %protocol"
    // //% pin.fieldEditor="gridpicker"
    // //% pin.fieldOptions.columns=4
    // //% pin.fieldOptions.tooltips="false"
    // //% weight=15
    // export function connectIrReceiver(pin: DigitalPin, protocol: IrProtocol): void {
    //     if (irState) {
    //         return;
    //     }

    //     irState = {
    //         protocol: protocol,
    //         bitsReceived: 0,
    //         commandBits: 0,
    //         command: IrButton.Any,
    //         hasNewCommand: false,
    //     };

    //     enableIrMarkSpaceDetection(pin);

    //     let activeCommand = IR_INCOMPLETE;
    //     let repeatTimeout = 0;
    //     const REPEAT_TIMEOUT_MS = 120;

    //     control.onEvent(
    //         MICROBIT_MAKERBIT_IR_NEC,
    //         EventBusValue.MICROBIT_EVT_ANY,
    //         () => {
    //             const necValue = control.eventValue();

    //             // Refresh repeat timer
    //             if (necValue <= 255 || necValue === IR_REPEAT) {
    //                 repeatTimeout = input.runningTime() + REPEAT_TIMEOUT_MS;
    //             }

    //             // Process a new command
    //             if (necValue <= 255 && necValue !== activeCommand) {
    //                 if (activeCommand >= 0) {
    //                     control.raiseEvent(
    //                         MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
    //                         activeCommand
    //                     );
    //                 }

    //                 irState.hasNewCommand = true;
    //                 irState.command = necValue;
    //                 activeCommand = necValue;
    //                 control.raiseEvent(MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID, necValue);
    //             }
    //         }
    //     );

    //     control.inBackground(() => {
    //         while (true) {
    //             if (activeCommand === IR_INCOMPLETE) {
    //                 // sleep to save CPU cylces
    //                 basic.pause(2 * REPEAT_TIMEOUT_MS);
    //             } else {
    //                 const now = input.runningTime();
    //                 if (now > repeatTimeout) {
    //                     // repeat timed out
    //                     control.raiseEvent(
    //                         MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
    //                         activeCommand
    //                     );
    //                     activeCommand = IR_INCOMPLETE;
    //                 } else {
    //                     basic.pause(REPEAT_TIMEOUT_MS);
    //                 }
    //             }
    //         }
    //     });
    // }

    // /**
    //  * Do something when a specific button is pressed or released on the remote control.
    //  * @param button the button to be checked
    //  * @param action the trigger action
    //  * @param handler body code to run when event is raised
    //  */
    // //% subcategory="IR Receiver"
    // //% blockId=makerbit_infrared_on_ir_button
    // //% block="on IR button | %button | %action"
    // //% button.fieldEditor="gridpicker"
    // //% button.fieldOptions.columns=3
    // //% button.fieldOptions.tooltips="false"
    // //% weight=13
    // export function onIrButton(button: IrButton, action: IrButtonAction, handler: () => void) {
    //     control.onEvent(
    //         action === IrButtonAction.Pressed
    //             ? MICROBIT_MAKERBIT_IR_BUTTON_PRESSED_ID
    //             : MICROBIT_MAKERBIT_IR_BUTTON_RELEASED_ID,
    //         button === IrButton.Any ? EventBusValue.MICROBIT_EVT_ANY : button,
    //         () => {
    //             irState.command = control.eventValue();
    //             handler();
    //         }
    //     );
    // }

    // /**
    //  * Returns the code of the IR button that was pressed last. Returns -1 (IrButton.Any) if no button has been pressed yet.
    //  */
    // //% subcategory="IR Receiver"
    // //% blockId=makerbit_infrared_ir_button_pressed
    // //% block="IR button"
    // //% weight=10
    // export function irButton(): number {
    //     if (!irState) {
    //         return IrButton.Any;
    //     }
    //     return irState.command;
    // }

    // /**
    //  * Returns true if any button was pressed since the last call of this function. False otherwise.
    //  */
    // //% subcategory="IR Receiver"
    // //% blockId=makerbit_infrared_was_any_button_pressed
    // //% block="any IR button was pressed"
    // //% weight=7
    // export function wasAnyIrButtonPressed(): boolean {
    //     if (!irState) {
    //         return false;
    //     }
    //     if (irState.hasNewCommand) {
    //         irState.hasNewCommand = false;
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // /**
    //  * Returns the command code of a specific IR button.
    //  * @param button the button
    //  */
    // //% subcategory="IR Receiver"
    // //% blockId=makerbit_infrared_button_code
    // //% button.fieldEditor="gridpicker"
    // //% button.fieldOptions.columns=3
    // //% button.fieldOptions.tooltips="false"
    // //% block="IR button code %button"
    // //% weight=5
    // export function irButtonCode(button: IrButton): number {
    //     return button as number;
    // }

}

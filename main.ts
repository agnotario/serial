namespace serialCom {
    // Define el pin que se utilizará para la comunicación serial
    let txPin = DigitalPin.P0
    let rxPin = DigitalPin.P1

    /**
     * Enviar un mensaje serial
     * @param message Mensaje a enviar
     */
    //% block="enviar mensaje serial %message"
    export function sendSerial(message: string): void {
        serial.writeLine(message)
    }
}

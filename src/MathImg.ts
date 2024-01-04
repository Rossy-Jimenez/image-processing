
import { ImageType } from "./ImageType.js";

export class MathImg {

  public static initArray(width: number, height: number): any {
    var arrImage = new Array(3);
    arrImage[0] = new Array(height);
    arrImage[1] = new Array(height);
    arrImage[2] = new Array(height);
    for (let i = 0; i < height; i++) {
      arrImage[0][i] = new Array(width);
      arrImage[1][i] = new Array(width);
      arrImage[2][i] = new Array(width);
    }
    return arrImage;
  }
  public static initArray2D(width: number, height: number): any {
    var arrImage = new Array(2);
    arrImage[0] = new Array(height);
    arrImage[1] = new Array(height);
    for (let i = 0; i < height; i++) {
      arrImage[0][i] = new Array(width);
      arrImage[1][i] = new Array(width);
    }
    return arrImage;
  }

  public static toGray(img: ImageType): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());

    var prom;
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        //0.299 + 0.587G + 0.114B.
        prom = (0.299 * arrImage[0][i][j] + 0.587 * arrImage[1][i][j] + 0.114 * arrImage[2][i][j]);
        sal[0][i][j] = prom;
        sal[1][i][j] = prom;
        sal[2][i][j] = prom;
      }
    }
    return sal;
  }
  public static toNegative(img: ImageType): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = 255 - arrImage[0][i][j];
        sal[1][i][j] = 255 - arrImage[1][i][j];
        sal[2][i][j] = 255 - arrImage[2][i][j];
      }
    }
    return sal;
  }
  public static toNegativeGrises(img: ImageType): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    let prom;
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        prom = (0.299 * arrImage[0][i][j] + 0.587 * arrImage[1][i][j] + 0.114 * arrImage[2][i][j]);
        sal[0][i][j] = 255 - prom;
        sal[1][i][j] = 255 - prom;
        sal[2][i][j] = 255 - prom;
      }
    }
    return sal;
  }
  public static toRed(img: ImageType): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = arrImage[0][i][j];
        sal[1][i][j] = 0;
        sal[2][i][j] = 0;
      }
    }
    return sal;
  }
  public static toGreen(img: ImageType): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = 0;
        sal[1][i][j] = arrImage[1][i][j];
        sal[2][i][j] = 0;
      }
    }
    return sal;
  }
  public static toBlue(img: ImageType): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = 0;
        sal[1][i][j] = 0;
        sal[2][i][j] = arrImage[2][i][j];
      }
    }
    return sal;
  }
  //este codigose agrego el 4 de abril de 2022
  public static toTricolor(img: ImageType): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    let inicio = 0, termino = img.getWidth() / 3;
    console.log(inicio, termino);
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = inicio; j < termino; j++) {
        sal[0][i][j] = 0;
        sal[1][i][j] = arrImage[1][i][j];
        sal[2][i][j] = 0;
      }
    }
    inicio = termino;
    termino = 2 * img.getWidth() / 3;
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = inicio; j < termino; j++) {
        sal[0][i][j] = arrImage[0][i][j];
        sal[1][i][j] = arrImage[0][i][j];
        sal[2][i][j] = arrImage[0][i][j];
      }
    }
    inicio = termino;
    termino = img.getWidth();
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = inicio; j < termino; j++) {
        sal[0][i][j] = arrImage[0][i][j];
        sal[1][i][j] = 0;
        sal[2][i][j] = 0;
      }
    }
    return sal;
  }
  
  public static correctionGamma(img: ImageType, factores: number[]): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = this.funcionGamma(arrImage[0][i][j], factores[0]);
        sal[1][i][j] = this.funcionGamma(arrImage[1][i][j], factores[1]);
        sal[2][i][j] = this.funcionGamma(arrImage[2][i][j], factores[2]);
      }
    }
    return sal;
  }

  public static funcionGamma(pixel: number, factor: number): number {
    return Math.min(255 * Math.pow(pixel / 250, factor), 255);
  }

  public static toUmbral(img: ImageType, umbral: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage: number[][][] = img.getArrayImg();
    //variable donde guardamos la salida
    var sal: number[][][] = this.initArray(img.getWidth(), img.getHeight());
    var prom;
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        prom = (arrImage[0][i][j] + arrImage[1][i][j] + arrImage[2][i][j]) / 3;
        if (prom > umbral) {
          sal[0][i][j] = arrImage[0][i][j];
          sal[1][i][j] = arrImage[1][i][j];
          sal[2][i][j] = arrImage[2][i][j];
        }
          
        /*sal[0][i][j] = prom > umbral ? 255 : 0;
        sal[1][i][j] = sal[0][i][j];
        sal[2][i][j] = sal[0][i][j];*/
      }
    }
    return sal;
  }
  
  public static toDesfaceX(img: ImageType, des: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage: number[][][] = img.getArrayImg();
    //variable donde guardamos la salida
    var sal: number[][][] = this.initArray(img.getWidth(), img.getHeight());
    var fila = arrImage[0].length, cols = arrImage[0][0].length;
    for (let i = 0; i < fila; i++) {
      for (let j = 0; j < cols; j++) {
        sal[1][i][j] = arrImage[1][i][j];
        if ((j - des) >= 0) {
          sal[0][i][j] = arrImage[0][i][j - des];
        }
        else {
          sal[0][i][j] = arrImage[0][i][j];
        }
        if ((j + des) < cols) {
          sal[2][i][j] = arrImage[2][i][j + des];
        }
        else {
          sal[2][i][j] = arrImage[2][i][j];
        }
      }
    }
    return sal;
  }

  public static toDesfaceY(img: ImageType, desy: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage: number[][][] = img.getArrayImg();
    //variable donde guardamos la salida
    var sal: number[][][] = this.initArray(img.getWidth(), img.getHeight());
    var fila = arrImage[0].length, cols = arrImage[0][0].length;
    for (let i = 0; i < fila; i++) {
      for (let j = 0; j < cols; j++) {
        sal[1][i][j] = arrImage[1][i][j];
        if ((i - desy) >= 0) {
          sal[0][i][j] = arrImage[0][i - desy][j];
        }
        else {
          sal[0][i][j] = arrImage[0][i][j];
        }
        if ((i + desy) < fila) {
          sal[2][i][j] = arrImage[2][i + desy][j];
        }
        else {
          sal[2][i][j] = arrImage[2][i][j];
        }
      }
    }
    return sal;
  }

  public static toDesfaceD(img: ImageType, des: number, ang: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage: number[][][] = img.getArrayImg();
    //variable donde guardamos la salida
    var sal: number[][][] = this.initArray(img.getWidth(), img.getHeight());
    var fila = arrImage[0].length, cols = arrImage[0][0].length;
    let desx = Math.floor(des * Math.cos(ang * Math.PI / 180));
    let desy = Math.floor(des * Math.sin(ang * Math.PI / 180));
    for (let i = 0; i < fila; i++) {
      for (let j = 0; j < cols; j++) {
        sal[1][i][j] = arrImage[1][i][j];
        if ((i - desy) >= 0 && (j - desx) >= 0) {
          sal[0][i][j] = arrImage[0][i - desy][j - desx];
        }
        else {
          sal[0][i][j] = arrImage[0][i][j];
        }
        if ((i + desy) < fila && (j + desx) < cols) {
          sal[2][i][j] = arrImage[2][i + desy][j + desx];
        }
        else {
          sal[2][i][j] = arrImage[2][i][j];
        }
      }
    }
    return sal;
  }

  public static toUmbral2limites(img: ImageType, rangos: number[]): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage: number[][][] = img.getArrayImg();
    //variable donde guardamos la salida
    var fila = arrImage[0].length, cols = arrImage[0][0].length;
    var sal: number[][][] = this.initArray(img.getWidth(), img.getHeight());
    let rangoMin = rangos[0];
    let rangoMax = rangos[1];
    var prome;
    for (let i = 0; i < fila; i++) {
      for (let j = 0; j < cols; j++) {
        prome = (arrImage[0][i][j] + arrImage[1][i][j] + arrImage[2][i][j]) / 3;
        if (prome >= rangoMin && prome <= rangoMax) {
          sal[0][i][j] = 250;
        }
        else
          sal[0][i][j] = 0;
        sal[1][i][j] = sal[0][i][j];
        sal[2][i][j] = sal[0][i][j];
      }
    }
    return sal;
  }

  public static changeBrightness(img: ImageType, factor: number): number[][][] {
    var arrImage: number[][][] = img.getArrayImg();
    var sal: number[][][] = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = arrImage[0][i][j] + factor
        sal[1][i][j] = arrImage[1][i][j] + factor;
        sal[2][i][j] = arrImage[2][i][j] + factor
        /*sal[0][i][j] = arrImage[0][i][j] * factor > 255.0 ? 255.0 : arrImage[0][i][j] * factor;
        sal[1][i][j] = arrImage[1][i][j] * factor > 255.0 ? 255.0 : arrImage[1][i][j] * factor;
        sal[2][i][j] = arrImage[2][i][j] * factor > 255.0 ? 255.0 : arrImage[2][i][j] * factor;
      */
      }
    }
    return sal;
  }
  public static cambioFTransferencia(img: ImageType, factores: number[]): number[][][] {
    var arrImage: number[][][] = img.getArrayImg();
    factores.unshift(0, 0);
    let tamFact = factores.length;
    let I1: number, I2: number, O1: number, O2: number;
    let factor;
    var sal: number[][][] = this.initArray(img.getWidth(), img.getHeight());
 
    for (let k = 2; k < tamFact; k += 2) {
      I1 = factores[k - 2];
      O1 = factores[k - 1];
      I2 = factores[k];
      O2 = factores[k + 1];
      factor = (O2 - O1) / (I2 - I1);
      //console.log(factor)
      for (let i = 0; i < img.getHeight(); i++) {
        for (let j = 0; j < img.getWidth(); j++) {
          if (arrImage[0][i][j] >= I1 && arrImage[0][i][j] < I2)
            sal[0][i][j] = factor * (arrImage[0][i][j] - I1) + O1;
          
          
          if (arrImage[1][i][j] >= I1 && arrImage[1][i][j] < I2)
            sal[1][i][j] = factor * (arrImage[1][i][j] - I1) + O1;
         
          
          if (arrImage[2][i][j] >= I1 && arrImage[2][i][j] < I2)
            sal[2][i][j] = factor * (arrImage[2][i][j] - I1) + O1;
         
          
        }
      }

    }
    return sal;
  }
  public static relativeBrightness(img: ImageType): number[][][] {
    var arrImage: number[][][] = img.getArrayImg();
    var sal: any[][][] = this.initArray2D(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        //si el valor del pixel > umbral, entoncesa calculo el brillo
        //si no el brillo =0
        sal[0][i][j] = Math.sqrt(arrImage[0][i][j] ** 2 * 0.299 +
          arrImage[1][i][j] ** 2 * 0.587 +
          arrImage[2][i][j] ** 2 * 0.114) / 100.0;
        sal[1][i][j] = 'rgb(' + arrImage[0][i][j] + ',' + arrImage[1][i][j] + ',' + arrImage[2][i][j] + ')';
      }
    }
    return sal;
  }

  /**
   * Metodo para Generar el contraste de una Imagen
   * @img  ImageType tipo de imagen donde se guarda una matriz tridimencional
   * @return number[][][] es la imagen de salida con contraste 
   */
  public static changeContraste(img: ImageType, valor: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage: number[][][] = img.getArrayImg();
    //variable donde guardamos la salida
    var sal: number[][][] = this.initArray(img.getWidth(), img.getHeight());
    //
    var cR, cG, cB: number;
    var contraste: number;
    contraste = (valor + 100) / 100;
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        cR = ((((arrImage[0][i][j] / 255.0) - 0.5) * contraste) + 0.5) * 255.0;
        if (cR > 255) cR = 255;
        if (cR < 0) cR = 0;
        sal[0][i][j] = cR;
        cG = ((((arrImage[1][i][j] / 255.0) - 0.5) * contraste) + 0.5) * 255.0;
        if (cG > 255) cG = 255;
        if (cG < 0) cG = 0;
        sal[1][i][j] = cG;
        cB = ((((arrImage[2][i][j] / 255.0) - 0.5) * contraste) + 0.5) * 255.0;
        if (cB > 255) cB = 255;
        if (cB < 0) cB = 0;
        sal[2][i][j] = cB;
      }
    }
    return sal;
  }
  public static colorGradienteX(img: ImageType, factores: number[]): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    let arrImage: number[][][] = img.getArrayImg();
    //variable donde guardamos la salida
    let sal: number[][][] = this.initArray(img.getWidth(), img.getHeight());
    var prom: number;
    let r1, r2, b1, b2, g1, g2: number;
    let dr, dg, db, dir: number;
    r1 = factores[0];
    g1 = factores[1];
    b1 = factores[2];
    r2 = factores[3];
    g2 = factores[4];
    b2 = factores[5];

    dr = (r2 - r1) / img.getWidth();
    dg = (g2 - g1) / img.getWidth();
    db = (b2 - b1) / img.getWidth();

    for (let j = 0; j < img.getWidth(); j++) {
      for (let i = 0; i < img.getHeight(); i++) {
        prom = (arrImage[0][i][j] + arrImage[1][i][j] + arrImage[2][i][j]) / 3;
        sal[0][i][j] = Math.floor(prom * r1 / 255);
        sal[1][i][j] = Math.floor(prom * g1 / 255);
        sal[2][i][j] = Math.floor(prom * b1 / 255);
      }
      r1 += dr;
      g1 += dg;
      b1 += db;
    }
    return sal;
  }
  public static colorGradientY(img: ImageType, factores: number[]): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    let arrImage: number[][][] = img.getArrayImg();
    //variable donde guardamos la salida
    let sal: number[][][] = this.initArray(img.getWidth(), img.getHeight());
    var prom: number;
    let r1, r2, b1, b2, g1, g2: number;
    let dr, dg, db: number;
    r1 = factores[0];
    g1 = factores[1];
    b1 = factores[2];
    r2 = factores[3];
    g2 = factores[4];
    b2 = factores[5];

    dr = (r2 - r1) / img.getHeight();
    dg = (g2 - g1) / img.getHeight();
    db = (b2 - b1) / img.getHeight();

    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        prom = (arrImage[0][i][j] + arrImage[1][i][j] + arrImage[2][i][j]) / 3;
        sal[0][i][j] = Math.floor(prom * r1 / 255);
        sal[1][i][j] = Math.floor(prom * g1 / 255);
        sal[2][i][j] = Math.floor(prom * b1 / 255);
      }
      r1 += dr;
      g1 += dg;
      b1 += db;
    }
    return sal;
  }


  public static pow(img: ImageType, power: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = Math.pow(arrImage[0][i][j], power);
        sal[1][i][j] = Math.pow(arrImage[1][i][j], power);
        sal[2][i][j] = Math.pow(arrImage[2][i][j], power);
      }
    }
    return sal;
  }

  public static toCos(img: ImageType): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = Math.cos(arrImage[0][i][j]);
        sal[1][i][j] = Math.cos(arrImage[1][i][j]);
        sal[2][i][j] = Math.cos(arrImage[2][i][j]);
      }
    }
    return sal;
  }

  public static toSubtract(img: ImageType, escalar: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = arrImage[0][i][j] - escalar;
        sal[1][i][j] = arrImage[1][i][j] - escalar;
        sal[2][i][j] = arrImage[2][i][j] - escalar;
      }
    }
    return sal;
  }
  
  public static toMultiplication(img: ImageType, valor: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = valor * arrImage[0][i][j];
        sal[1][i][j] = valor * arrImage[1][i][j];
        sal[2][i][j] = valor * arrImage[2][i][j];
      }
    }
    return sal;
  }
  
  public static toSine(img: ImageType): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = Math.sin(arrImage[0][i][j]);
        sal[1][i][j] = Math.sin(arrImage[1][i][j]);
        sal[2][i][j] = Math.sin(arrImage[2][i][j]);
      }
    }
    return sal;
  }

  public static toAdd(img: ImageType, sumar: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = arrImage[0][i][j] + sumar;
        sal[1][i][j] = arrImage[1][i][j] + sumar;
        sal[2][i][j] = arrImage[2][i][j] + sumar;
      }
    }
    return sal;
  }
 
  public static toDividir(img: ImageType, dividir: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = arrImage[0][i][j] / dividir;
        sal[1][i][j] = arrImage[1][i][j] / dividir;
        sal[2][i][j] = arrImage[2][i][j] / dividir;
      }
    }
    return sal;
  }
  

  public static toSqrt(img: ImageType): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {

        sal[0][i][j] = Math.sqrt(arrImage[0][i][j]);
        sal[1][i][j] = Math.sqrt(arrImage[1][i][j]);
        sal[2][i][j] = Math.sqrt(arrImage[2][i][j]);
      }
    }
    return sal;
  }

  public static toTan(img: ImageType): number[][][] {

    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = Math.tan(arrImage[0][i][j]);
        sal[1][i][j] = Math.tan(arrImage[1][i][j]);
        sal[2][i][j] = Math.tan(arrImage[2][i][j]);
      }
    }
    return sal;
  }

  public static addImg(img: ImageType, img2: ImageType): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    var arrImage2 = img2.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = arrImage[0][i][j] + 0.2 * arrImage2[0][i][j];
        sal[1][i][j] = arrImage[1][i][j] + 0.2 * arrImage2[1][i][j];
        sal[2][i][j] = arrImage[2][i][j] + 0.2 * arrImage2[2][i][j];
      }
    }
    return sal;
  }

  public static marcaAguaCentro(img: ImageType, img2: ImageType, porc: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    let arrImage;
    let arrImage2;
    let width;
    let height;
    let sal;
    let midW, midH;
    let midsmallW, midsmallH;
    let widthsmall, heightsmall;
    
    if (img.getWidth() > img2.getWidth()) {
      arrImage = img.getArrayImg();
      arrImage2 = img2.getArrayImg();
      width = img.getWidth();
      height = img.getHeight();
      widthsmall = img2.getWidth();
      heightsmall = img2.getHeight();
      sal = this.initArray(img.getWidth(), img.getHeight());
    } else {
      arrImage2 = img.getArrayImg();
      arrImage = img2.getArrayImg();
      width = img2.getWidth();
      height = img2.getHeight();
      widthsmall = img.getWidth();
      heightsmall = img.getHeight();
      sal = this.initArray(img2.getWidth(), img2.getHeight());
    }
    midW = Math.floor(width / 2);
    midH = Math.floor(height / 2);
    midsmallW = Math.floor(widthsmall / 2);
    midsmallH = Math.floor(heightsmall / 2);

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        sal[0][i][j] = arrImage[0][i][j];
        sal[1][i][j] = arrImage[1][i][j];
        sal[2][i][j] = arrImage[2][i][j];
      }
    }
    for (let i = 0; i < heightsmall; i++) {
      for (let j = 0; j < widthsmall; j++) {
        sal[0][midH - midsmallH + i][midW - midsmallW + j] += arrImage2[0][i][j] * porc;
        sal[1][midH - midsmallH + i][midW - midsmallW + j] += arrImage2[1][i][j] * porc;
        sal[2][midH - midsmallH + i][midW - midsmallW + j] += arrImage2[2][i][j] * porc;
      }
    }

    return sal;
  }

  public static marcaAguaArray(img: ImageType, img2: ImageType, porc: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    let arrImage;
    let arrImage2;
    let width;
    let height;
    let sal;
    let widthsmall, heightsmall;
    let noVecesAncho, noVecesAlto;
    
    if (img.getWidth() > img2.getWidth()) {
      arrImage = img.getArrayImg();
      arrImage2 = img2.getArrayImg();
      width = img.getWidth();
      height = img.getHeight();
      widthsmall = img2.getWidth();
      heightsmall = img2.getHeight();
      sal = this.initArray(img.getWidth(), img.getHeight());
    } else {
      arrImage2 = img.getArrayImg();
      arrImage = img2.getArrayImg();
      width = img2.getWidth();
      height = img2.getHeight();
      widthsmall = img.getWidth();
      heightsmall = img.getHeight();
      sal = this.initArray(img2.getWidth(), img2.getHeight());
    }
    noVecesAncho = Math.floor(width / widthsmall);
    noVecesAlto = Math.floor(height / heightsmall);
  
    for (let w = 0; w <= noVecesAlto; w++) {
      for (let v = 0; v <= noVecesAncho; v++) {
        
        for (let i = 0; i < heightsmall; i++) {
          for (let j = 0; j < widthsmall; j++) {
            if ((i + w * heightsmall) < height && (j + v * widthsmall) < width) {
              sal[0][i + w * heightsmall][j + v * widthsmall] = arrImage[0][i + w * heightsmall][j + v * widthsmall] + arrImage2[0][i][j] * porc;
              sal[1][i + w * heightsmall][j + v * widthsmall] = arrImage[1][i + w * heightsmall][j + v * widthsmall] + arrImage2[1][i][j] * porc;
              sal[2][i + w * heightsmall][j + v * widthsmall] = arrImage[2][i + w * heightsmall][j + v * widthsmall] + arrImage2[2][i][j] * porc;
            }
            //else
            // break;
          }
        }
      }
    }
    return sal;
  }
  
  public static hist(img: ImageType): number[][] {

    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = new Array(3);
    sal[0] = new Array(256);
    sal[1] = new Array(256);
    sal[2] = new Array(256);
    
    for (let i = 0; i < 256; i++) {
      sal[0][i] = 0;
      sal[1][i] = 0;
      sal[2][i] = 0;
    }
    
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        //console.log(arrImage[0][i][j], i,j )
        sal[0][arrImage[0][i][j]]++;
        sal[1][arrImage[1][i][j]]++;
        sal[2][arrImage[2][i][j]]++;
      }
    }

    //console.log(sal[0])
    return sal;
  }
  public static histAcum(h: number[][]): number[][] {

    //variable donde guardamos la salida
    var hist = new Array(3);
    hist[0] = new Array(256);
    hist[1] = new Array(256);
    hist[2] = new Array(256);
  
    hist[0][0] = h[0][0];
    hist[1][0] = h[1][0];
    hist[2][0] = h[2][0];
    for (let i = 1; i < h[0].length; i++) {
      hist[0][i] = hist[0][i - 1] + h[0][i];
      hist[1][i] = hist[1][i - 1] + h[1][i];
      hist[2][i] = hist[2][i - 1] + h[2][i];
      //if(i==255)
    }
    return hist;
  }

  public static ecualizar(img: ImageType): number[][][] {

    //variable que guarda el arreglo 3d de la imagen de color
    let arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    let sal = this.initArray(img.getWidth(), img.getHeight());
    let h = this.hist(img);
    let hA = this.histAcum(h);
    let fT: number[][];
    fT = new Array(3);
    fT[0] = new Array(256);
    fT[2] = new Array(256);
    fT[1] = new Array(256);
    
    for (let i = 0; i < 256; i++) {
      fT[0][i] = Math.floor(hA[0][i] * 255.0 / hA[0][255]);
      fT[1][i] = Math.floor(hA[1][i] * 255.0 / hA[1][255]);
      fT[2][i] = Math.floor(hA[2][i] * 255.0 / hA[2][254]);
    }
    
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = fT[0][arrImage[0][i][j]];
        sal[1][i][j] = fT[1][arrImage[1][i][j]];
        sal[2][i][j] = fT[2][arrImage[2][i][j]];
      }
    }
  
    return sal;
  }


  public static erosionar(img: ImageType, vec8: boolean): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = 0;
        sal[1][i][j] = 0;
        sal[2][i][j] = 0;
      }
    }
    let vecinos: number, valorComp = 4;
    if (vec8) valorComp = 8;
    
    for (let i = 1; i < img.getHeight() - 1; i++) {
      for (let j = 1; j < img.getWidth() - 1; j++) {
        vecinos = 0;
        vecinos += arrImage[0][i + 1][j] ? 1 : 0;
        vecinos += arrImage[0][i - 1][j] ? 1 : 0;
        vecinos += arrImage[0][i][j + 1] ? 1 : 0;
        vecinos += arrImage[0][i][j - 1] ? 1 : 0;
        if (vec8) {
          vecinos += arrImage[0][i + 1][j - 1] ? 1 : 0;
          vecinos += arrImage[0][i + 1][j + 1] ? 1 : 0;
          vecinos += arrImage[0][i - 1][j + 1] ? 1 : 0;
          vecinos += arrImage[0][i - 1][j - 1] ? 1 : 0;
        }

        if (arrImage[0][i][j] && vecinos == valorComp) {
          sal[0][i][j] = 255;
          sal[1][i][j] = 255;
          sal[2][i][j] = 255;
        }
      }
    }
    
    return sal;
  }
  public static dilatar(img: ImageType, vec8: boolean): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][i][j] = 0;
        sal[1][i][j] = 0;
        sal[2][i][j] = 0;
      }
    }
    let vecinos: number, valorComp = 4;
    if (vec8) valorComp = 8;
    
    for (let i = 1; i < img.getHeight() - 1; i++) {
      for (let j = 1; j < img.getWidth() - 1; j++) {
        vecinos = 0;
        vecinos += arrImage[0][i + 1][j] ? 1 : 0;
        vecinos += arrImage[0][i - 1][j] ? 1 : 0;
        vecinos += arrImage[0][i][j + 1] ? 1 : 0;
        vecinos += arrImage[0][i][j - 1] ? 1 : 0;
        if (vec8) {
          vecinos += arrImage[0][i + 1][j - 1] ? 1 : 0;
          vecinos += arrImage[0][i + 1][j + 1] ? 1 : 0;
          vecinos += arrImage[0][i - 1][j + 1] ? 1 : 0;
          vecinos += arrImage[0][i - 1][j - 1] ? 1 : 0;
        }

        if (arrImage[0][i][j] && vecinos) {
          sal[0][i][j] = 255;
          sal[1][i][j] = 255;
          sal[2][i][j] = 255;
        }
      }
    }
    
    return sal;
  }

  public static apertura(img: ImageType, vec8: boolean): number[][][] {
    var arrImage = this.erosionar(img, vec8);
    var sal = this.initArray(img.getWidth(), img.getHeight());
    let vecinos: number, valorComp = 4;
    if (vec8) valorComp = 8;
    
    for (let i = 1; i < img.getHeight() - 1; i++) {
      for (let j = 1; j < img.getWidth() - 1; j++) {
        vecinos = 0;
        vecinos += arrImage[0][i + 1][j] ? 1 : 0;
        vecinos += arrImage[0][i - 1][j] ? 1 : 0;
        vecinos += arrImage[0][i][j + 1] ? 1 : 0;
        vecinos += arrImage[0][i][j - 1] ? 1 : 0;
        if (vec8) {
          vecinos += arrImage[0][i + 1][j - 1] ? 1 : 0;
          vecinos += arrImage[0][i + 1][j + 1] ? 1 : 0;
          vecinos += arrImage[0][i - 1][j + 1] ? 1 : 0;
          vecinos += arrImage[0][i - 1][j - 1] ? 1 : 0;
        }

        if (arrImage[0][i][j] && vecinos) {
          sal[0][i][j] = 255;
          sal[1][i][j] = 255;
          sal[2][i][j] = 255;
        }
      }
    }
    
    return sal;
  }

  public static cierre(img: ImageType, vec8: boolean): number[][][] {
    var arrImage = this.dilatar(img, vec8);
    let vecinos: number, valorComp = 4;
    var sal = this.initArray(img.getWidth(), img.getHeight());
    if (vec8) valorComp = 8;
    
    for (let i = 1; i < img.getHeight() - 1; i++) {
      for (let j = 1; j < img.getWidth() - 1; j++) {
        vecinos = 0;
        vecinos += arrImage[0][i + 1][j] ? 1 : 0;
        vecinos += arrImage[0][i - 1][j] ? 1 : 0;
        vecinos += arrImage[0][i][j + 1] ? 1 : 0;
        vecinos += arrImage[0][i][j - 1] ? 1 : 0;
        if (vec8) {
          vecinos += arrImage[0][i + 1][j - 1] ? 1 : 0;
          vecinos += arrImage[0][i + 1][j + 1] ? 1 : 0;
          vecinos += arrImage[0][i - 1][j + 1] ? 1 : 0;
          vecinos += arrImage[0][i - 1][j - 1] ? 1 : 0;
        }

        if (arrImage[0][i][j] && vecinos == valorComp) {
          sal[0][i][j] = 255;
          sal[1][i][j] = 255;
          sal[2][i][j] = 255;
        }
      }
    }
    
    return sal;
  }

  public static fromRGBtoHSI(img: ImageType): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(img.getWidth(), img.getHeight());
    let hue: number;
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        arrImage[0][i][j] /= 255.0;
        arrImage[1][i][j] /= 255.0;
        arrImage[2][i][j] /= 255.0;
        hue = 180 / Math.PI * Math.acos(0.5 * ((arrImage[0][i][j] - arrImage[1][i][j]) + (arrImage[0][i][j] - arrImage[2][i][j])) /
          Math.sqrt(Math.pow(arrImage[0][i][j] - arrImage[1][i][j], 2) + (arrImage[0][i][j] - arrImage[2][i][j]) * (arrImage[1][i][j] - arrImage[2][i][j])))
          
        sal[0][i][j] = arrImage[2][i][j] > arrImage[1][i][j] ? 360 - hue : hue;
        sal[1][i][j] = 1 - (3 * Math.min(arrImage[0][i][j], arrImage[1][i][j], arrImage[2][i][j])) / (arrImage[0][i][j] + arrImage[1][i][j] + arrImage[2][i][j]);
        sal[2][i][j] = (arrImage[0][i][j] + arrImage[1][i][j] + arrImage[2][i][j]) / 3;
      }
    }
    return sal;
  }

  public static fromHSItoRGB(arrImage: number[][][]): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    let width: number;
    let height: number;
    height = arrImage[0].length;
    width = arrImage[0][0].length;
    //variable donde guardamos la salida
    var sal = this.initArray(width, height);
  
    let hue: number;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        //H de 0 - 120
        if (arrImage[0][i][j] >= 0 && arrImage[0][i][j] < 120) {
          sal[0][i][j] = arrImage[2][i][j] * (1 + (arrImage[1][i][j] * Math.cos(this.toRad(arrImage[0][i][j]))) /
            (Math.cos(this.toRad(60 - arrImage[0][i][j]))));
          sal[2][i][j] = arrImage[2][i][j] * (1 - arrImage[1][i][j]);
          sal[1][i][j] = 3 * arrImage[2][i][j] - sal[0][i][j] - sal[2][i][j];
        } else if (arrImage[0][i][j] >= 120 && arrImage[0][i][j] < 240) {
          sal[0][i][j] = arrImage[2][i][j] * (1 - arrImage[1][i][j]);
          sal[1][i][j] = arrImage[2][i][j] * (1 + (arrImage[1][i][j] * Math.cos(this.toRad(arrImage[0][i][j] - 120))) /
            (Math.cos(this.toRad(180 - arrImage[0][i][j]))));
          sal[2][i][j] = 3 * arrImage[2][i][j] - sal[0][i][j] - sal[1][i][j];
        } else if (arrImage[0][i][j] >= 240 && arrImage[0][i][j] < 360) {
          sal[1][i][j] = arrImage[2][i][j] * (1 - arrImage[1][i][j]);
          sal[2][i][j] = arrImage[2][i][j] * (1 + (arrImage[1][i][j] * Math.cos(this.toRad(arrImage[0][i][j] - 240))) /
            (Math.cos(this.toRad(300 - arrImage[0][i][j]))));
          sal[0][i][j] = 3 * arrImage[2][i][j] - sal[1][i][j] - sal[2][i][j];
        }
        sal[0][i][j] *= 255.0;
        sal[1][i][j] *= 255.0;
        sal[2][i][j] *= 255.0;
      }
    }
    return sal;
  }

  public static toRad(grados: number): number {
    return (grados * Math.PI / 180);
  }
  public static falseColorByHue(arrImage: number[][][], hue: number, newHue: number): number[][][] {
    let width: number;
    let height: number;
    height = arrImage[0].length;
    width = arrImage[0][0].length;
    //variable donde guardamos la salida
    var sal = this.initArray(width, height);
    let range = 25;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        //si hue es menor a cero estamos en el rango de 360 bajos, por lo que hay que revisar esos valores
        if ((hue - range) < 0) {
          if (Math.abs(hue - arrImage[0][i][j]) < range) {
            sal[0][i][j] = newHue;
          } else if ((360 + hue - arrImage[0][i][j]) < range) {
            sal[0][i][j] = newHue;
          } else {
            sal[0][i][j] = arrImage[0][i][j];
          }
        }
        else if ((hue + range) > 360) {
          if (Math.abs(hue - arrImage[0][i][j]) < range) {
            sal[0][i][j] = newHue;
          } else if ((-360 + hue - arrImage[0][i][j]) < range) {
            sal[0][i][j] = newHue;
          } else {
            sal[0][i][j] = arrImage[0][i][j];
          }
        }// si no se rebasa del cero
        else if (Math.abs(hue - arrImage[0][i][j]) < range) {
          sal[0][i][j] = newHue;
        } // si no se rebasa del rango
        else {
          sal[0][i][j] = arrImage[0][i][j];
        }
        sal[1][i][j] = arrImage[1][i][j];
        sal[2][i][j] = arrImage[2][i][j];
      }
    }
    return sal;
  }

  //aqui va ir el codigo de la trasnformacion bilineal  
  public static bilineal() {
    return 0;
  }

  public static pulso(width: number, height: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    //var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(width, height);
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {

        sal[0][i][j] = 0;
        sal[1][i][j] = 0;
        sal[2][i][j] = 0;
      }
    }
    sal[0][Math.floor(height / 2)][Math.floor(width / 2)] = 255;
    sal[1][Math.floor(height / 2)][Math.floor(width / 2)] = 255;
    sal[2][Math.floor(height / 2)][Math.floor(width / 2)] = 255;
    return sal;
  }

  public static ruido(width: number, height: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    //var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(width, height);
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        sal[0][i][j] = (Math.random() * 256) > 128 ? 255 : 0;
        sal[1][i][j] = sal[0][i][j];
        sal[2][i][j] = sal[0][i][j];
      }
    }
    return sal;
  }

  public static rampaX(width: number, height: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    //var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(width, height);
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        sal[0][i][j] = j;
        sal[1][i][j] = j;
        sal[2][i][j] = j;
      }
    }
    return sal;
  }

  public static rampaY(width: number, height: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    //var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    var sal = this.initArray(width, height);
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        sal[0][i][j] = i;
        sal[1][i][j] = i;
        sal[2][i][j] = i;
      }
    }
    return sal;
  }

  public static escalar(img: ImageType, factor: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    let newHeight = Math.floor(img.getHeight() * factor), newWitdh = Math.floor(img.getWidth() * factor);
    var sal = this.initArray(newWitdh, newHeight);
    
    for (let i = 0; i < newHeight; i++) {
      for (let j = 0; j < newWitdh; j++) {
        sal[0][i][j] = arrImage[0][Math.floor(i / factor)][Math.floor(j / factor)];
        sal[1][i][j] = arrImage[1][Math.floor(i / factor)][Math.floor(j / factor)];
        sal[2][i][j] = arrImage[2][Math.floor(i / factor)][Math.floor(j / factor)];
      }
    }
    /*
    for (let i = 0; i < img.getHeight(); i++) {
      for (let j = 0; j < img.getWidth(); j++) {
        sal[0][Math.floor(i*factor)][Math.floor(j*factor)] = arrImage[0][i][j] ;
        sal[1][Math.floor(i*factor)][Math.floor(j*factor)] = arrImage[1][i][j] ;
        sal[2][Math.floor(i*factor)][Math.floor(j*factor)] = arrImage[2][i][j] ;
      }
    }*/
    return sal;
  }

  public static rotar(img: ImageType, angulo: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    let newHeight = img.getHeight(), newWitdh = img.getWidth();
    var sal = this.initArray(newWitdh, newHeight);
    let xP = newWitdh / 2, yP = newHeight / 2;
    let phi = (angulo * Math.PI / 180),
      c = Math.cos(phi), s = Math.sin(phi),
      r11 = c, r12 = s,
      r21 = -s, r22 = c,
      r31 = -xP * c + yP * s + xP, r32 = -xP * s - yP * c + yP;
    let nX: number, nY: number;
    for (let i = 0; i < newHeight; i++) {
      for (let j = 0; j < newWitdh; j++) {
        nX = Math.floor(j * r11 + i * r21 + r31);
        nY = Math.floor(j * r12 + i * r22 + r32);
        debugger

        if ((nX >= 0 && nX < newWitdh) && (nY >= 0 && nY < newHeight)) {
          sal[0][i][j] = arrImage[0][nY][nX];
          sal[1][i][j] = arrImage[1][nY][nX];
          sal[2][i][j] = arrImage[2][nY][nX];
        }
      }
    }
  
    return sal;
  }

  public static shearingX(img: ImageType, factor: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    let newHeight = img.getHeight(), newWitdh = img.getWidth();
    var sal = this.initArray(newWitdh, newHeight);
    console.log(newWitdh, newHeight)
    for (let i = 0; i < newHeight; i++) {
      for (let j = 0; j < newWitdh; j++) {
        if ((j + Math.floor(factor * i)) < newWitdh) {
          sal[0][i][j + Math.floor(factor*i)] = arrImage[0][i][j];
          sal[1][i][j+ Math.floor(factor*i)] = arrImage[1][i][j];
          sal[2][i][j+ Math.floor(factor*i)] = arrImage[2][i][j];
        }
      }
    }
  
    return sal;
  }
  public static shearingY(img: ImageType, factor: number): number[][][] {
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    let newHeight = img.getHeight(), newWitdh = img.getWidth();
    var sal = this.initArray(newWitdh, newHeight);
    console.log(newWitdh, newHeight)
    for (let i = 0; i < newHeight; i++) {
      for (let j = 0; j < newHeight; j++) {
        if ((i+ Math.floor(factor*j)) < newWitdh) {
          sal[0][i+ Math.floor(factor*j)][j] = arrImage[0][i][j];
          sal[1][i+ Math.floor(factor*j)][j] = arrImage[1][i][j];
          sal[2][i+ Math.floor(factor*j)][j] = arrImage[2][i][j];
        }
      }
    }
  
    return sal;
  }

  public static tAfin(img: ImageType, factores: number[]): number[][][] {
    let x1a = 0, x2a = img.getWidth(), x3a = 0;
    let y1a = 0, y2a = 0, y3a = img.getHeight();
    let x1r = factores[0], x2r = factores[2], x3r = factores[4];
    let y1r = factores[1], y2r = factores[3], y3r = factores[5];
    let x4r = x2r - x1r;
    let y4r = y1r + y2r + y3r;
    
    //variable que guarda el arreglo 3d de la imagen de color
    var arrImage = img.getArrayImg();
    //variable donde guardamos la salida
    let newHeight = y4r - y1r, newWitdh = x2r - x3r;
    
    var sal = this.initArray(newWitdh, newHeight);
    /*
    for (let i = 0; i < newHeight; i++) {
      for (let j = 0; j < newHeight; j++) {
        if ((i+ Math.floor(factor*j)) < newWitdh) {
          sal[0][i+ Math.floor(factor*j)][j] = arrImage[0][i][j];
          sal[1][i+ Math.floor(factor*j)][j] = arrImage[1][i][j];
          sal[2][i+ Math.floor(factor*j)][j] = arrImage[2][i][j];
        }
      }
    }
  */
    return sal;
  }





  public static expandirRangoDinamico(arrImage: number[][][]): number[][][] {
    const width = arrImage[0][0].length;
    const height = arrImage[0].length;
    const sal = this.initArray(width, height);

    // Encuentra los valores mínimos y máximos en cada canal
    let minR = 255;
    let minG = 255;
    let minB = 255;
    let maxR = 0;
    let maxG = 0;
    let maxB = 0;

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        minR = Math.min(minR, arrImage[0][i][j]);
        minG = Math.min(minG, arrImage[1][i][j]);
        minB = Math.min(minB, arrImage[2][i][j]);
        maxR = Math.max(maxR, arrImage[0][i][j]);
        maxG = Math.max(maxG, arrImage[1][i][j]);
        maxB = Math.max(maxB, arrImage[2][i][j]);
      }
    }

    // Calcula los factores de escala para cada canal
    const scaleR = 255 / (maxR - minR);
    const scaleG = 255 / (maxG - minG);
    const scaleB = 255 / (maxB - minB);

    // Aplica la expansión del rango dinámico
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        sal[0][i][j] = Math.round((arrImage[0][i][j] - minR) * scaleR);
        sal[1][i][j] = Math.round((arrImage[1][i][j] - minG) * scaleG);
        sal[2][i][j] = Math.round((arrImage[2][i][j] - minB) * scaleB);
      }
    }

    return sal;
  }

  public static EfectoSepia(arrImage: number[][][]): number[][][] {
    const width = arrImage[0][0].length;
    const height = arrImage[0].length;
    const sal = this.initArray(width, height);

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const r = arrImage[0][i][j];
            const g = arrImage[1][i][j];
            const b = arrImage[2][i][j];

            // Fórmulas para aplicar el efecto sepia
            const tr = 0.393 * r + 0.769 * g + 0.189 * b;
            const tg = 0.349 * r + 0.686 * g + 0.168 * b;
            const tb = 0.272 * r + 0.534 * g + 0.131 * b;

            // Ajusta los valores para evitar que se salgan del rango (0-255)
            sal[0][i][j] = Math.min(255, tr);
            sal[1][i][j] = Math.min(255, tg);
            sal[2][i][j] = Math.min(255, tb);
        }
    }

    return sal;
}


public static efectoDispersion(arrImage: number[][][], cantidad: number): number[][][] {
  const width = arrImage[0][0].length;
  const height = arrImage[0].length;
  const sal = this.initArray(width, height);

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // Calcula la posición dispersa
      const dispersaX = j + Math.floor(Math.random() * cantidad * 2) - cantidad;
      const dispersaY = i + Math.floor(Math.random() * cantidad * 2) - cantidad;

      // Asegúrate de que la posición dispersa esté dentro de los límites de la imagen
      const x = Math.min(Math.max(dispersaX, 0), width - 1);
      const y = Math.min(Math.max(dispersaY, 0), height - 1);

      // Copia el color original en la posición dispersa
      sal[0][y][x] = arrImage[0][i][j];
      sal[1][y][x] = arrImage[1][i][j];
      sal[2][y][x] = arrImage[2][i][j];
    }
  }

  return sal;
}


public static EfectoArcoIris(imagenOriginal: ImageType): number[][][] {
  const width = imagenOriginal.getWidth();
  const height = imagenOriginal.getHeight();
  const arrImage = imagenOriginal.getArrayImg();
  const sal = this.initArray(width, height);

  // Colores del arco iris (rojo, naranja, amarillo, verde, azul, violeta)
  const colores = [
      [255, 0, 0],
      [255, 165, 0],
      [255, 255, 0],
      [0, 128, 0],
      [0, 0, 255],
      [128, 0, 128]
  ];

  for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
          const banda = Math.floor((colores.length * j) / width);

          // Combina la imagen original con el color del arco iris
          sal[0][i][j] = Math.min(arrImage[0][i][j] + colores[banda][0], 255);
          sal[1][i][j] = Math.min(arrImage[1][i][j] + colores[banda][1], 255);
          sal[2][i][j] = Math.min(arrImage[2][i][j] + colores[banda][2], 255);
      }
  }

  return sal; }

  public static saturacionSelectiva(arrImage: number[][][], saturacion: number): number[][][] {
    // Obtén el ancho y alto de la imagen original
    const width = arrImage[0][0].length;
    const height = arrImage[0].length;

    // Inicializa el arreglo de salida con los colores originales
    const sal = this.initArray(width, height);

    // Factor de saturación
    const saturationFactor = (100 + saturacion) / 100;

    // Aplica la saturación selectiva
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            // Convierte el píxel a HSL
            const hsl = this.rgbToHsl(arrImage[0][i][j], arrImage[1][i][j], arrImage[2][i][j]);

            // Ajusta la saturación
            hsl[1] *= saturationFactor;

            // Convierte de nuevo a RGB
            const rgb = this.hslToRgb(hsl[0], hsl[1], hsl[2]);

            // Asigna los nuevos valores al píxel
            sal[0][i][j] = rgb[0];
            sal[1][i][j] = rgb[1];
            sal[2][i][j] = rgb[2];
        }
    }

    return sal;
}

// Función para convertir de RGB a HSL
private static rgbToHsl(r: number, g: number, b: number): number[] {
    r /= 255, g /= 255, b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return [h * 360, s, l];
}

// Función para convertir de HSL a RGB
private static hslToRgb(h: number, s: number, l: number): number[] {
    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}


public static reflejoLente(arrImage: number[][][]): number[][][] {
    const width = arrImage[0][0].length;
    const height = arrImage[0].length;
    const sal = this.initArray(width, height);

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            // Simula un reflejo de lente al invertir horizontalmente la imagen
            const reflejoJ = width - 1 - j;
            sal[0][i][j] = arrImage[0][i][reflejoJ];
            sal[1][i][j] = arrImage[1][i][reflejoJ];
            sal[2][i][j] = arrImage[2][i][reflejoJ];
        }
    }

    return sal;
}


}
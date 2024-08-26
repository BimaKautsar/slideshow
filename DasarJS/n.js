class Mobil {
  constructor(nama) {
    this.nama = nama;
  }
  infoMobil() {
    return `Mobil ${this.nama}`;
  }
}

class Bus extends Mobil {
  constructor(nama) {
    super(nama);
  }

  infoBus() {
    return `Bus ${this.nama}`;
  }
}

let busBobi = new Bus("Scania K360TB");
console.log(busBobi.infoBus()); // Bus Scania K360TB
console.log(busBobi.infoMobil()); // Mobil Scania K360TB

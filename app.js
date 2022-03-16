import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

let data = [], lulus = 0, tidakLulus = 0, rata_rata = 0;
const recursiveAsyncReadLine = () => {
  rl.question('Masukan Nilai : ', (angka) => {
    if (angka == 'q') {
      console.log(data);
      data.forEach(e => {
        e >= 75 ? lulus++ : tidakLulus++;
        rata_rata += parseFloat(e);
      })
      rata_rata = (rata_rata / data.length).toFixed(2)
      console.log('Nilai Tertinggi : ' + Math.max.apply(null, data));
      console.log('Nilai Terendah : ' + Math.min.apply(null, data));
      console.log('Nilai Rata-Rata : ' + rata_rata);
      console.log('Jumlah Siswa Lulus : ' + lulus);
      console.log('Jumlah Siswa Tidak Lulus : ' + tidakLulus);
      return rl.close()
    } else {
      data.push(angka)
      recursiveAsyncReadLine()
    }

  })
}
recursiveAsyncReadLine()
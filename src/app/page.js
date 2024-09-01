import Script from 'next/script';

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Cari Data
      </h1>
      <h2 className="text-center mb-6">
        Website untuk mencari data Mahasiswa, Dosen, Perguruan Tinggi, dan Program Studi di Indonesia.
      </h2>
      <form id="search-form" className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-5 text-center">
        <select
          id="search-type"
          name="type"
          className="border p-2 rounded w-full md:w-auto"
        >
          <option value="pt">Perguruan Tinggi</option>
          <option value="prodi">Program Studi</option>
          <option value="dosen">Dosen</option>
          <option value="mhs">Mahasiswa</option>
        </select>
        <input
          type="text"
          id="search-query"
          name="q"
          className="border p-2 rounded w-full md:w-auto"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full md:w-auto"
        >
          Search
        </button>
      </form>
      <div id="results" className="mt-4"></div>

      <Script id="search-script" strategy="lazyOnload">
        {`
          document.getElementById('search-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const query = document.getElementById('search-query').value;
            const type = document.getElementById('search-type').value;

            if (!query.trim()) {
              document.getElementById('results').textContent = 'Masukan Data dengan benar';
              return;
            }

            try {
              const url = \`/api/pencarian?type=\${encodeURIComponent(type)}&q=\${encodeURIComponent(query)}\`;
              const response = await fetch(url);
              if (!response.ok) throw new Error('Network response was not ok');
              const data = await response.json();

              const resultsDiv = document.getElementById('results');
              resultsDiv.innerHTML = data.map(item => {
                let resultHtml = \`
                  <div class="border p-4 mb-4 rounded">
                    
                \`;

                if (type === 'mhs') {
                  resultHtml += \`
                  <strong>Nama Mahasiswa:</strong> \${item.nama || 'Tidak Ada'}<br>
                  <strong>NIM:</strong> \${item.nim || 'Tidak Ada'}<br>
                  <strong>Perguruan Tinggi:</strong> \${item.nama_pt || 'Tidak Ada'}<br>
                  <strong>Program Studi:</strong> \${item.nama_prodi || 'Tidak Ada'}<br>
                  <strong>Singkatan Perguruan Tinggi:</strong> \${item.sinkatan_pt || 'Tidak Ada'}<br>
                  \`;

                } else if (type === 'dosen') {
                  resultHtml += \`
                  <strong>Nama Dosen:</strong> \${item.nama || 'Tidak Ada'}<br>
                  <strong>NIDN:</strong> \${item.nidn || 'Tidak Ada'}<br>
                  <strong>Perguruan Tinggi:</strong> \${item.nama_pt || 'Tidak Ada'}<br>
                  <strong>Program Studi:</strong> \${item.nama_prodi || 'Tidak Ada'}<br>
                  <strong>Singkatan Perguruan Tinggi:</strong> \${item.sinkatan_pt || 'Tidak Ada'}<br>
                  \`;
                } else if (type === 'pt') {
                  resultHtml += \`
                  <strong>Kode PT	:</strong> \${item.kode || 'Tidak Ada'}<br>
                  <strong>Singkatan Perguruan Tinggi:</strong> \${item.nama_singkat || 'Tidak Ada'}<br>
                  <strong>Nama Perguruan Tinggi	:</strong> \${item.nama || 'Tidak Ada'}<br>
                  \`;
                } else if (type === 'prodi') {
                  resultHtml += \`
                    <strong>Nama Program Studi:</strong> \${item.nama || 'Tidak Ada'}<br>
                    <strong>Jenjang:</strong> \${item.jenjang || 'Tidak Ada'}<br>
                    <strong>Perguruan Tinggi:</strong> \${item.pt || 'Tidak Ada'}<br>
                    <strong>Singkatan:</strong> \${item.pt_singkat || 'Tidak Memiliki Singkatan'}<br>
                  \`;
                } else {
                  resultHtml += \`
                    <strong>Institution:</strong> \${item.nama_pt || 'Tidak Ada'}<br>
                    <strong>Program:</strong> \${item.nama_prodi || 'Tidak Ada'}<br>
                  \`;
                }

                resultHtml += \`</div>\`;

                return resultHtml;
              }).join('');
            } catch (error) {
              console.error('Error:', error);
              document.getElementById('results').textContent = 'Tidak Ditemukan ';
            }
          });
        `}
      </Script>
    </div>
  );
}

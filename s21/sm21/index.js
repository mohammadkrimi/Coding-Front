    const btn = document.getElementById('loadBtn');
    const missionsDiv = document.getElementById('missions');

    btn.addEventListener('click', async () => {
      missionsDiv.innerHTML = 'loading data...';
      try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        const data = await response.json();

        let html = '';
        data.forEach(mission => {
          html += `<div>
            <h3>${mission.mission_name}</h3>
            <p>${mission.description || `Nothing`}</p>
            <p> producer: ${(mission.manufacturers || []).join(', ')}</p>
            ${mission.wikipedia ? `<a href="${mission.wikipedia}" target="_blank">Wikipedia</a>` : ''}
            ${mission.website ? ` | <a href="${mission.website}" target="_blank">Website</a>` : ''}
            <hr>
          </div>`;
        });
        missionsDiv.innerHTML = html;
      } catch (error) {
        missionsDiv.innerHTML = 'Something went wrong';
        console.error(error);
      }
    });
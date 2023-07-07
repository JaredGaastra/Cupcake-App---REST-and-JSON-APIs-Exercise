// function deleteCupcake() {
//     addEventListener('click', async function(e) {
//         if (e.target.tagName === 'X') {
//             await axios.delete(`/api/cupcakes/${e.target.id}`);
//             e.target.parentElement.remove();
//         }
//     });
// }

// function updateCupcake(){
//     addEventListener('click', async function(e) {
//         if (e.target.tagName === 'UPDATE') {
//             let flavor = document.getElementById('flavor').value;
//             let size = document.getElementById('size').value;
//             let rating = document.getElementById('rating').value;
//             let image = document.getElementById('image').value;
//             let id = e.target.id;
//             let data = {flavor, size, rating, image};
//             await axios.patch(`/api/cupcakes/${id}`, data);
//             e.target.parentElement.remove();
//         }
//     });
// }

class CupcakeManager {
    constructor() {
      this.cupcakeList = document.querySelector('.cupcake-list');
      this.deleteButtons = document.querySelectorAll('.delete-button');
      this.updateButtons = document.querySelectorAll('.update-button');
      this.initializeEventListeners();
    }
  
    initializeEventListeners() {
      this.deleteButtons.forEach((button) => {
        button.addEventListener('click', async (e) => {
          if (e.target.tagName === 'X') {
            await this.deleteCupcake(e.target.id);
            e.target.parentElement.remove();
          }
        });
      });
  
      this.updateButtons.forEach((button) => {
        button.addEventListener('click', async (e) => {
          if (e.target.tagName === 'UPDATE') {
            let flavor = document.getElementById('flavor').value;
            let size = document.getElementById('size').value;
            let rating = document.getElementById('rating').value;
            let image = document.getElementById('image').value;
            let id = e.target.id;
            let data = { flavor, size, rating, image };
            await this.updateCupcake(id, data);
            e.target.parentElement.remove();
          }
        });
      });
    }
  
    async deleteCupcake(id) {
      await axios.delete(`/api/cupcakes/${id}`);
    }
  
    async updateCupcake(id, data) {
      await axios.patch(`/api/cupcakes/${id}`, data);
    }
  }
  
  const cupcakeManager = new CupcakeManager();
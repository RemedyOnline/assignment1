const Models = () => {
    return (
        <>
            <section id="models" class="py-20 bg-white">
                <div class="container mx-auto text-center">
                    <h2 class="text-3xl font-bold text-blue-600">Our Models</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {/* <!-- Model 1 --> */}
                        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <img src="car-model1.jpg" alt="Model 1" class="w-full h-64 object-cover rounded-lg">
                                <h3 class="text-xl font-semibold text-blue-600 mt-4">Kantanka Omama 4x4</h3>
                                <p class="text-gray-600 mt-2">A robust SUV for both urban and off-road adventures.</p>
                        </div>
                        {/* <!-- Model 2 --> */}
                        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <img src="car-model2.jpg" alt="Model 2" class="w-full h-64 object-cover rounded-lg">
                                <h3 class="text-xl font-semibold text-blue-600 mt-4">Kantanka Onantefo</h3>
                                <p class="text-gray-600 mt-2">A sleek sedan offering elegance and comfort.</p>
                        </div>
                        {/* Model 3 */}
                        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <img src="car-model3.jpg" alt="Model 3" class="w-full h-64 object-cover rounded-lg">
                                <h3 class="text-xl font-semibold text-blue-600 mt-4">Kantanka Otumfo</h3>
                                <p class="text-gray-600 mt-2">An electric car leading the charge in eco-friendly technology.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Models;
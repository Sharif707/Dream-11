

const PlayerContainer = () => {
    return (
        <div>
              <div className="flex justify-between items-center px-3 py-4">
          <h1 className="text-2xl font-bold">Available</h1>
        
          <div className="space-x-2">
            <button>Available</button>
            <button>Selected</button>
          </div>
  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">

        </div>
        </div>
    );
};

export default PlayerContainer;
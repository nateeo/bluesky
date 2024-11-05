"use client";

import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { data } from "./api";

interface Activity {
  description: string;
  unit: string;
  cost: number;
  supplier?: string;
  note?: string;
}

interface DayPlan {
  day: number;
  activities: (Activity | undefined)[];
}

export default function Form() {
  const [selectedItems, setSelectedItems] = useState<DayPlan[]>([]);
  const [optionalActivities, setOptionalActivities] = useState<Activity[]>([]);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [numberOfDays, setNumberOfDays] = useState(8);
  const [totalCost, setTotalCost] = useState(0);

  // Update the useEffect to watch for numberOfDays changes
  useEffect(() => {
    // Set initial selected items
    const initialSelectedItems = Array.from(
      { length: numberOfDays },
      (_, index) => {
        // Keep existing activities if the day exists, otherwise create new empty day
        if (index < selectedItems.length) {
          return selectedItems[index];
        }

        // For new days, add default activities
        return {
          day: index + 1,
          activities: [
            data.find((item) => item.description === "Meal RMC Lunch"),
            // Add more default activities if needed
          ].filter(Boolean), // Remove any undefined values
        };
      }
    );

    setSelectedItems(initialSelectedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfDays]); // Add numberOfDays as dependency

  // Separate useEffect for initial data load
  useEffect(() => {
    // Set initial selected items
    const initialSelectedItems = [
      {
        day: 1,
        activities: [
          data.find((item) => item.description.includes("AM ARRIVAL PACKAGE")),
          data.find((item) => item.description === "Meal RMC Lunch"),
          data.find((item) =>
            item.description.includes("Sydney City Tour (Half day)")
          ),
          data.find((item) => item.description.includes("Opera House Tour")),
        ],
      },
      {
        day: 2,
        activities: [
          data.find((item) => item.description.includes("Blue Mountains")),
          data.find((item) => item.description === "Meal RMC Lunch"),
          data.find((item) =>
            item.description.includes("Harbour Bridge Climb")
          ),
        ],
      },
      {
        day: 3,
        activities: [
          data.find((item) => item.description.includes("Bondi Beach")),
          data.find((item) => item.description === "Meal RMC Lunch"),
          data.find((item) => item.description.includes("Watsons Bay")),
          data.find((item) =>
            item.description.includes("Royal Botanic Garden")
          ),
        ],
      },
      {
        day: 4,
        activities: [
          data.find((item) => item.description.includes("Taronga Zoo")),
          data.find((item) => item.description === "Meal RMC Lunch"),
          data.find((item) => item.description.includes("Darling Harbour")),
          data.find((item) => item.description.includes("Sydney Tower Eye")),
        ],
      },
      {
        day: 5,
        activities: [
          data.find((item) =>
            item.description.includes("Queen Victoria Building")
          ),
          data.find((item) => item.description === "Meal RMC Lunch"),
          data.find((item) => item.description.includes("Shopping")),
          data.find((item) => item.description.includes("Luna Park")),
        ],
      },
      {
        day: 6,
        activities: [
          data.find((item) => item.description.includes("Manly Beach")),
          data.find((item) => item.description === "Meal RMC Lunch"),
          data.find((item) => item.description.includes("Australian Museum")),
        ],
      },
      {
        day: 7,
        activities: [
          data.find((item) => item.description.includes("Aboriginal Art")),
          data.find((item) => item.description === "Meal RMC Lunch"),
          data.find((item) => item.description.includes("Powerhouse")),
          data.find((item) => item.description.includes("DEPARTURE PACKAGE")),
        ],
      },
      {
        day: 8,
        activities: [
          data.find((item) => item.description.includes("Sydney Wildlife")),
          data.find((item) => item.description === "Meal RMC Lunch"),
          data.find((item) => item.description.includes("Harbour Cruise")),
        ],
      },
    ];
    setSelectedItems(initialSelectedItems);

    // Set initial optional activities
    const initialOptionalActivities = data.filter(
      (item) =>
        !initialSelectedItems.some((day) =>
          day.activities.some(
            (activity) => activity && activity.description === item.description
          )
        ) &&
        (item.description.includes("Tour") ||
          item.description.includes("Experience") ||
          item.description.includes("Visit") ||
          item.description.includes("Adventure") ||
          item.description.includes("Cruise") ||
          item.description.includes("Show"))
    );
    setOptionalActivities(initialOptionalActivities);
  }, []); // Only run once on mount

  useEffect(() => {
    const cost = selectedItems.reduce((total, day) => {
      return (
        total +
        day.activities.reduce((dayTotal, activity) => {
          if (!activity) return dayTotal;
          return dayTotal + activity.cost * numberOfPeople;
        }, 0)
      );
    }, 0);

    setTotalCost(cost);
  }, [selectedItems, numberOfPeople]);

  const removeActivity = (dayIndex: number, activityIndex: number) => {
    const newSelectedItems = [...selectedItems];
    const removedActivity =
      newSelectedItems[dayIndex].activities[activityIndex];
    newSelectedItems[dayIndex].activities.splice(activityIndex, 1);
    setSelectedItems(newSelectedItems);

    if (
      removedActivity &&
      !optionalActivities.some(
        (act) => act.description === removedActivity.description
      )
    ) {
      setOptionalActivities([...optionalActivities, removedActivity]);
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // Drop was cancelled
    if (!destination) return;

    // Handle dragging between days
    if (
      source.droppableId.startsWith("day-") &&
      destination.droppableId.startsWith("day-")
    ) {
      const sourceDay = parseInt(source.droppableId.split("-")[1]);
      const destDay = parseInt(destination.droppableId.split("-")[1]);

      const newSelectedItems = [...selectedItems];
      const [removed] = newSelectedItems[sourceDay - 1].activities.splice(
        source.index,
        1
      );
      newSelectedItems[destDay - 1].activities.splice(
        destination.index,
        0,
        removed
      );

      setSelectedItems(newSelectedItems);
    }

    // Handle dragging from optional activities to a day
    else if (
      source.droppableId === "optional" &&
      destination.droppableId.startsWith("day-")
    ) {
      const destDay = parseInt(destination.droppableId.split("-")[1]);
      const activity = optionalActivities[source.index];

      const newSelectedItems = [...selectedItems];
      newSelectedItems[destDay - 1].activities.splice(
        destination.index,
        0,
        activity
      );

      const newOptionalActivities = [...optionalActivities];
      newOptionalActivities.splice(source.index, 1);

      setSelectedItems(newSelectedItems);
      setOptionalActivities(newOptionalActivities);
    }

    // Handle dragging from a day to optional activities
    else if (
      source.droppableId.startsWith("day-") &&
      destination.droppableId === "optional"
    ) {
      const sourceDay = parseInt(source.droppableId.split("-")[1]);

      const newSelectedItems = [...selectedItems];
      const [removed] = newSelectedItems[sourceDay - 1].activities.splice(
        source.index,
        1
      );

      setSelectedItems(newSelectedItems);
      setOptionalActivities([...optionalActivities, removed!]);
    }
  };

  const ActivityItem = ({
    activity,
    index,
    dayIndex,
    showDelete = false,
  }: {
    activity: Activity;
    index: number;
    dayIndex?: number;
    showDelete?: boolean;
  }) => {
    return (
      <Draggable draggableId={`${activity.description}-${index}`} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="border-b pb-2 bg-white hover:bg-gray-50 w-full"
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex-1">
                <p className="font-medium">{activity.description}</p>
                <p className="text-sm text-gray-600">
                  Provider: {activity.supplier || "Not specified"} | Unit:{" "}
                  {activity.unit}
                </p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <p className="font-semibold">${activity.cost.toFixed(2)}</p>
                {showDelete && dayIndex !== undefined && (
                  <button
                    onClick={() => removeActivity(dayIndex, index)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="w-screen min-h-screen p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Title section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h1 className="text-3xl font-bold">Prototype</h1>
          </div>

          {/* Sticky header with inputs and total */}
          <div className="sticky top-0 z-10 bg-white p-4 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Number of People
                </label>
                <input
                  type="number"
                  min="1"
                  value={numberOfPeople}
                  onChange={(e) =>
                    setNumberOfPeople(parseInt(e.target.value) || 1)
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Number of Days
                </label>
                <select
                  value={numberOfDays}
                  onChange={(e) => setNumberOfDays(parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value={7}>7 Days</option>
                  <option value={8}>8 Days</option>
                  <option value={9}>9 Days</option>
                  <option value={10}>10 Days</option>
                </select>
              </div>
              <div className="text-right">
                <label className="block text-sm font-medium text-gray-700">
                  Total Cost
                </label>
                <div className="mt-1 text-xl font-semibold">
                  ${totalCost.toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {selectedItems.map((day, dayIndex) => (
                <div
                  key={day.day}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-semibold mb-4">Day {day.day}</h2>
                  <Droppable
                    droppableId={`day-${day.day}`}
                    direction="vertical"
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="flex flex-col gap-4 min-h-[50px]"
                      >
                        {day.activities.map(
                          (activity, actIndex) =>
                            activity && (
                              <ActivityItem
                                key={`${activity.description}-${actIndex}`}
                                activity={activity}
                                index={actIndex}
                                dayIndex={dayIndex}
                                showDelete={true}
                              />
                            )
                        )}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              ))}
            </div>

            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
                <h2 className="text-xl font-semibold mb-4">
                  Optional Activities
                </h2>
                <Droppable droppableId="optional" direction="vertical">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="flex flex-col gap-4 min-h-[50px]"
                    >
                      {optionalActivities.map((activity, index) => (
                        <ActivityItem
                          key={`optional-${activity.description}-${index}`}
                          activity={activity}
                          index={index}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

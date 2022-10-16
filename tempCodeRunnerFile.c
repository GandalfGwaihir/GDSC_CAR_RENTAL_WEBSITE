#include<stdio.h>
#include<stdlib.h>
#include<time.h>


//a queue structure that stores plane id, its wait time and next pointer for next element in the queue
struct queue
{
    int planeId;
    int waitTime = 0;
    queue* next;
};


// main function
int main()
{
//defining two queues one that has landing flight details and another with takingoff flight details
    queue *landingQueue = NULL;
    queue *takeoffQueue = NULL;
//the next two variables indicate whether the riunway is available or not. 0 for not 1 for available
    int isRunway1Available = 1;
    int isRunway2Available = 1;
//next two variables store how many more minutes before the respective runway can be used.
    int numOfMinsLeftForRunway1 = 0;
    int numOfMinsLeftForRunway2 = 0;
//variable to countNumber of planes initialised with 0
    int countOfPlanes = 0;
//variable that stores total wait time of all the flights that flew
    int totalWaitTime = 0;
//variable to store count number of flight that took off and number of flight landed
    int countLandedFlights = 0;
    int countTakeOffFlights = 0;
//variables to store total wait time in each queue
    int timeInLandingQueue = 0;
    int timeInTakingOffQueue = 0;
//srand to randomly generate flight is taking off or landing
    srand(time(0));
//simulates the airport operation by help of a loop , starts at 0 ends at 120, simulates after every 5 minutes
    for(int i=0; i<=120;i+=5)
    {
    //if runway is not free then we substract 5 from the time after which runway will be free. This means 5 minutes passed
        if(numOfMinsLeftForRunway1!=0)
            numOfMinsLeftForRunway1-=5;
        if(numOfMinsLeftForRunway2!=0)
            numOfMinsLeftForRunway2-=5;
    //if number of minutes left after which runway will be free is 0, then we make the respective runway free variable 1
        if(numOfMinsLeftForRunway1==0)
            isRunway1Available = 1;
        if(numOfMinsLeftForRunway2==0)
            isRunway2Available = 1;
    //counts the total number of planes
        countOfPlanes++;
    //creates a temp pointer variable of queue type which will store newly generated flight
        queue *temp = (queue*)malloc(sizeof(queue));
        temp->planeId = countOfPlanes;
        temp->waitTime = 0;
        temp->next = NULL;
        printf("\nNew Plane request with Plane ID = %d is requesting ",countOfPlanes);
    //we use rand function , if its mod 2 value returns 0 then we consider flight landing
        if(rand()%2 == 0)
        {
            printf("landing\n");
    //we define an iterator that takes the value of landing queue head value
            queue* iterator = landingQueue;
    //if landing queue is empty then temp is assigned directly to landingqueue
            if(landingQueue == NULL)
                landingQueue = temp;
    //else we add it to the end of the landing queue
            else
            {
            while(iterator->next!=NULL)
                iterator = iterator->next;
            iterator->next = temp;
            }
        }
    //else if the rand() mod 2 value is 1, then we consider flight will be taking off
        else
        {
            printf("taking off\n");
    //we define an iterator that takes the value of taking off queue head value
            queue* iterator = takeoffQueue;
    //if takeoff queue is empty then temp is assigned directly to takeoffQueue
            if(takeoffQueue == NULL)
                takeoffQueue = temp;
    //else we add it to the end of the take off queue
            else
            {
                while(iterator->next!=NULL)
                    iterator = iterator->next;
                iterator->next = temp;
            }
        }
    //if runway 1 is available
            if(isRunway1Available == 1)
            {
    //if landing queue is not empty then we land a flight
            if(landingQueue != NULL)
            {
    //we make runway1 unavailable, since it is now used.
                isRunway1Available = 0;
    //we add 15minutes that will taken by this flight
                numOfMinsLeftForRunway1 = 15;
    //we increment the number of flights to be landed
                countLandedFlights++;
                timeInLandingQueue += landingQueue->waitTime;
                totalWaitTime += landingQueue->waitTime;
    //take the head and process that flight
                queue* temp = landingQueue;
                landingQueue = landingQueue->next;
    //we print the details of flight removed from queue
                printf("At time t = %d , In Runway 1, plane with plane ID:%d is landing after waiting %d minutes " ,i,temp->planeId
                        ,temp->waitTime);
                free(temp);
            }
            else if(takeoffQueue != NULL)
            {
    //we make runway1 unavailable, since it is now used.
                isRunway1Available = 0;
    //we add 15minutes that will taken by this flight
                numOfMinsLeftForRunway1 = 15;
    //we increment the number of flights to be take off
                countTakeOffFlights++;
                timeInTakingOffQueue += takeoffQueue->waitTime;
                totalWaitTime += takeoffQueue->waitTime;
    //take the head and process that flight
                queue* temp = takeoffQueue;
                takeoffQueue = takeoffQueue->next;
    //we print the details of flight removed from queue
                printf("At time t = %d, In Runway 1, plane with plane ID: %d is taking off after waiting %d  minutes", i,temp->planeId
                        ,temp->waitTime);
                free(temp);
            }
        }
            else if(isRunway2Available == 1)
            {
    //we make runway2 unavailable, since it is now used.
                if(landingQueue != NULL)
                {
    //we make runway2 unavailable, since it is now used.
                    isRunway2Available = 0;
    //we add 15minutes that will taken by this flight
                    numOfMinsLeftForRunway2 = 15;
    //we increment the number of flights to be landed
                    countLandedFlights++;
                    timeInLandingQueue += landingQueue->waitTime;
                    totalWaitTime += landingQueue->waitTime;
    //take the head and process that flight
                    queue* temp = landingQueue;
                    landingQueue = landingQueue->next;
    //we print the details of flight removed from queue
                    printf("At time t = %d, In Runway 2, plane with plane ID: %d is landing after waiting %d minutes",i
                            ,temp->planeId,temp->waitTime);
                    free(temp);
                }
                else if(takeoffQueue != NULL)
                {
    //we make runway2 unavailable, since it is now used.
                    isRunway2Available = 0;
    //we add 15minutes that will taken by this flight
                    numOfMinsLeftForRunway2 = 15;
    //we increment the number of flights to be take off
                    countTakeOffFlights++;
                    timeInTakingOffQueue += takeoffQueue->waitTime;
                    totalWaitTime += takeoffQueue->waitTime;
    //take the head and process that flight
                    queue* temp = takeoffQueue;
                    takeoffQueue = takeoffQueue->next;
    //we print the details of flight removed from queue
                    printf("At time t = %d, In Runway 2, plane with plane ID: %d is taking off after waiting %d minutes",i,temp->planeId
                            ,temp->waitTime);
                    free(temp);
                }
            }
            else
            {
    //if runway unavailable then we print the current details, which consist of details of time which is required to make runway available
                printf("At time t = %d, Time for runways to be free: Runway1 = %d minutes, Runway2 = %d minutes",i,numOfMinsLeftForRunway1
                        ,numOfMinsLeftForRunway2);
            }
    //here we increment the flights that are in queue waiting time
        if(landingQueue!=NULL)
        {
            queue* temp = landingQueue;
            while(temp!=NULL)
            {
                temp->waitTime+=5;
                temp = temp->next;
            }
        }
    //here we increment the flights that are in queue waiting time
        if(takeoffQueue!=NULL)
        {
            queue* temp = takeoffQueue;
            while(temp!=NULL)
            {
                temp->waitTime+=5;
                temp = temp->next;
            }
        }
    }
    
//we print the details asked in question
    printf("\nTotal Wait Time = %d",totalWaitTime);
    printf("\nNumber Of flights landed = %d",countLandedFlights);
    printf("\nNumber of Flights taken off = %d",countTakeOffFlights);
    printf("\nAverage time spent in landing queue = %f",(float)(timeInLandingQueue/countLandedFlights));
    printf("\nAverage time spent in Taking off queue = %f",(float)(timeInTakingOffQueue/countTakeOffFlights));
}
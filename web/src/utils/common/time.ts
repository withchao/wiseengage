/**
 * Copyright © 2023 OpenKF & OpenIM open source community. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { onUnmounted, Ref, ref } from 'vue';

// Return a count down tool
export const Counter = (duration = 60): [Ref<number>, () => void] => {
    let intervalTimer: ReturnType<typeof setInterval>;
    onUnmounted(() => {
        clearInterval(intervalTimer);
    });
    const countDown = ref(0);

    return [
        countDown,
        () => {
            countDown.value = duration;
            intervalTimer = setInterval(() => {
                if (countDown.value > 0) {
                    countDown.value -= 1;
                } else {
                    clearInterval(intervalTimer);
                    countDown.value = 0;
                }
            }, 1000);
        },
    ];
};

// Return a time of day
export const getTimeOfDay = (): string => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 0 && currentHour < 12) {
        return 'Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        return 'Afternoon';
    } else {
        return 'Evening';
    }
}

// Return diff days between now and date 
export const getNowDiffDays = (date: string): number => {
    const diffTime = Math.abs(new Date(date).getTime() - new Date().getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Return a time from date
// if date is today, return time
// if date is yesterday, return yesterday
// if date is before yesterday, return date
export const getTimeFromDate = (timestamp: number | string): string => {
    const dat  = new Date(timestamp);
    const diffDays = getNowDiffDays(dat.toString());
    if (diffDays === 0) {
        return dat.getHours() + ':' + dat.getMinutes();
    } else {
        return dat.getDate() + '/' + (dat.getMonth() + 1) + '/' + dat.getFullYear();
    }
}
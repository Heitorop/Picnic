<script setup lang="ts">
import { ref, computed, Ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { lightGreen, whiteColor } from "@/styles/variables";
import { Anchor, Menu } from "@/types";
import PlusIcon from "@/ui/PlusIcon.vue";

// menu logic

const MENU_DELAY = 800;
const isVisible = ref(false);

const menu: Ref<Menu> = ref({
  activator: "",
  text: "",
  location: "end top",
  origin: "bottom center",
});

const showMenu = (
  activator: string,
  location: Anchor,
  origin: Anchor,
  text: string
) => {
  menu.value.activator = activator;
  menu.value.text = text;
  menu.value.location = location;
  menu.value.origin = origin;

  isVisible.value = true;
};

const closeMenu = () => setTimeout(() => (isVisible.value = false), MENU_DELAY);

const { name } = useDisplay();

const btnSizes = computed(() => {
  switch (name.value) {
    case "xs":
      return { width: 120, height: 28 };
    case "sm":
      return { width: 148, height: 38 };
    default:
      return { width: 192, height: 48 };
  }
});

const menuDirections1 = computed((): { location: Anchor; origin: Anchor } => {
  switch (name.value) {
    case "xs":
      return { location: "start top", origin: "top end" };
    case "sm":
      return { location: "end top", origin: "bottom center" };
    default:
      return { location: "end top", origin: "bottom center" };
  }
});

const menuDirections5 = computed(() => {
  switch (name.value) {
    case "xs":
      return "top center";
    case "sm":
      return "top start";
    default:
      return "bottom center";
  }
});
</script>

<template>
  <div id="map">
    <picture>
      <source media="(min-width:960px)" srcset="../assets/DesctopMap.svg" />
      <source media="(min-width:600px)" srcset="../assets/TabletMap.svg" />
      <source media="(min-width:320px)" srcset="../assets/MobileMap.svg" />
      <img id="map-icon" alt="map" src="../assets/DesctopMap.svg" />
    </picture>
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <PlusIcon
          v-bind="props"
          class="plus-icon plus-icon-1"
          @mouseover="
            showMenu(
              '.plus-icon-1',
              `${menuDirections1.location}`,
              `${menuDirections1.origin}`,
              'House №1'
            )
          "
          @mouseleave="closeMenu"
          :circle-color="isHovering ? lightGreen : whiteColor"
          :path-color="isHovering ? whiteColor : lightGreen"
        />
      </template>
    </v-hover>
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <PlusIcon
          v-bind="props"
          @mouseover="
            showMenu('.plus-icon-2', 'end top', 'bottom center', 'House №2')
          "
          @mouseleave="closeMenu"
          class="plus-icon plus-icon-2"
          :circle-color="isHovering ? lightGreen : whiteColor"
          :path-color="isHovering ? whiteColor : lightGreen"
        />
      </template>
    </v-hover>
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <PlusIcon
          v-bind="props"
          @mouseover="
            showMenu('.plus-icon-3', 'end top', 'bottom center', 'House №3')
          "
          @mouseleave="closeMenu"
          class="plus-icon plus-icon-3"
          :circle-color="isHovering ? lightGreen : whiteColor"
          :path-color="isHovering ? whiteColor : lightGreen"
        />
      </template>
    </v-hover>
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <PlusIcon
          v-bind="props"
          @mouseover="
            showMenu('.plus-icon-4', 'end top', 'bottom center', 'House №4')
          "
          @mouseleave="closeMenu"
          class="plus-icon plus-icon-4"
          :circle-color="isHovering ? lightGreen : whiteColor"
          :path-color="isHovering ? whiteColor : lightGreen"
        />
      </template>
    </v-hover>
    <v-hover>
      <template v-slot:default="{ isHovering, props }">
        <PlusIcon
          v-bind="props"
          @mouseover="
            showMenu(
              '.plus-icon-5',
              'end top',
              `${menuDirections5}`,
              'House №5'
            )
          "
          @mouseleave="closeMenu"
          class="plus-icon plus-icon-5"
          :circle-color="isHovering ? lightGreen : whiteColor"
          :path-color="isHovering ? whiteColor : lightGreen"
        />
      </template>
    </v-hover>
    <v-menu
      :close-on-content-click="false"
      attach="true"
      v-model="isVisible"
      :activator="menu.activator"
      :location="menu.location"
      :origin="menu.origin"
    >
      <v-card>
        <v-card-title>
          {{ menu.text }}
        </v-card-title>

        <v-card-actions>
          <v-btn
            :width="btnSizes.width"
            :height="btnSizes.height"
            :color="whiteColor"
            variant="text"
            @click="console.log('click')"
          >
            Book the house
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<style lang="scss">
@import "../styles/mixins.scss";
@import "../styles/variables.scss";

#map {
  position: relative;
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(126, 163, 115, 0.30015756302521013) 2%,
    rgba(230, 190, 174, 0.14889705882352944) 27%,
    rgba(255, 255, 255, 0.3925945378151261) 62%
  );

  .v-menu > .v-overlay__content > .v-card {
    color: $text-color;
    background-color: $white;
    border-radius: 24px;
    padding: 20px;
    position: relative;
    overflow: unset;

    &::before {
      content: "";
      position: absolute;
      bottom: -18px;
      left: 77px;
      display: block;
      width: 30px;
      height: 24px;
      background-image: url("../assets/triangle.svg");
    }

    .v-card-title {
      padding: 0;
      text-align: start;
      font-size: 20px;
      line-height: 26px;
    }

    .v-card-actions {
      padding: 0;

      .v-btn {
        margin-top: 10px;
        border-radius: 24px;
        background-color: $light-green;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        text-transform: lowercase;
      }
    }
  }

  #map-icon {
    width: 100%;
    height: 100%;
  }

  .plus-icon {
    position: absolute;

    &-1 {
      top: 25%;
      left: 25%;
    }

    &-2 {
      top: 35%;
      left: 37%;
    }

    &-3 {
      top: 53%;
      left: 49%;
    }

    &-4 {
      top: 65%;
      left: 59%;
    }

    &-5 {
      top: 35%;
      left: 69%;
    }
  }

  @include mq("tablet") {
    .v-menu > .v-overlay__content > .v-card {
      &::before {
        left: 45px;
      }
    }

    .plus-icon {
      width: 36px;
      height: 36px;

      &-1 {
        top: 24%;
        left: 7%;
      }

      &-2 {
        top: 36%;
        left: 28%;
      }

      &-3 {
        top: 53%;
        left: 51%;
      }

      &-4 {
        top: 65%;
        left: 69%;
      }

      &-5 {
        top: 37%;
        left: 86%;
      }
    }
  }

  @include mq("mobile") {
    .v-menu > .v-overlay__content > .v-card {
      padding: 10px;

      &::before {
        left: 55px;
      }

      .v-card-title {
        font-size: 16px;
      }

      .v-card-actions {
        min-height: 0;

        .v-btn {
          font-size: 12px;
        }
      }
    }

    .plus-icon {
      width: 24px;
      height: 24px;

      &-1 {
        top: 24%;
        left: 7%;
      }

      &-2 {
        top: 36%;
        left: 28%;
      }

      &-3 {
        top: 53%;
        left: 51%;
      }

      &-4 {
        top: 65%;
        left: 69%;
      }

      &-5 {
        top: 37%;
        left: 86%;
      }
    }
  }
}
</style>

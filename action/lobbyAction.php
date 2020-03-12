<?php
	require_once("action/CommonAction.php");

	class lobbyAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			if (!isset($_SESSION["key"])) {
				header("location:index.php");
			}
			$result=[];
			if (isset($_GET["pratique"])){
				$data=[];
				$data["key"]=$_SESSION["key"];
				$data["type"]="TRAINING";

				$result = parent::callAPI("games/auto-match", $data);
			}

			if ($result==="JOINED_TRAINING" || $result==="JOINED_PVP" || $result==="CREATED_PVP") {
				header("location:game.php");
			}
			else if ($result==="INVALID_KEY" || $result==="INVALID_GAME_TYPE" || $result==="DECK_INCOMPLETE" || $result==="MAX_DEATH_THRESHOLD_REACHED")
			{
				$_SESSION["exitValue"]=$result;
				header("location:lobby.php");
			}



			return [];
		}
	}
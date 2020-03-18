<?php
	require_once("action/CommonAction.php");

	class ajaxGameAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			$result=[];
			if (isset($_SESSION["key"])) {
				if (isset($_POST["UID"]) && !isset($_POST["targetUID"])) {
					$data=[];
					$data["key"] = $_SESSION["key"];
					$data["type"] = "PLAY";
					$data["uid"] = $_POST["uid"];
					$result=parent::callAPI("games/action", $data);
				}
			}

			return compact("result");
		}
	}